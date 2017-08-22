const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session')
const aws = require('aws-sdk');

var app = express();
const PORT = (process.env.PORT);

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Express-sessions
app.set('trust proxy', 1);
app.use(session({
    secret: 'cat',
    resave: true,
    saveUninitialized: false,
    cookie: {expires: new Date(253402300000000)}
}));

//Mongoose
mongoose.promise = Promise;
//mongoose.connect('mongodb://localhost/time-together');
mongoose.connect(process.env.MONGODB_URI);

var db = mongoose.connection;

db.on('error', function(err) {    
    console.log('Mongoose Error: ' + err);    
});

db.once('open', function() {
    console.log('Successful connection to MongoDB');
});

//AWS
aws.config.region = 'us-east-1';

app.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        signatureVersion: 'v4',
        region: 'us-east-1'
  });
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: process.env.S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
});

//Routing
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

app.listen(PORT, function() {
    console.log('Listening to ' + PORT);
});