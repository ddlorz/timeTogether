let imageScripts = {
    previewPicture: () => {
        const files = document.getElementById('profile-photo-input').files;
        let reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('profile-photo').src = event.target.result;
        }
        reader.readAsDataURL(files[0]);
    },

    previewPicture: (input, id, parent) => {
        const files = document.getElementById(input).files;
        
        loadImage (
            files[0],
            function (img) {
                img.setAttribute('id', id);
                img.setAttribute('class', 'center-block thumbnail');
                console.log(img);
                document.getElementById(parent).replaceChild(img, document.getElementById(parent).childNodes[0]);
            },
            {maxWidth: 550, orientation: true, crop: true}
        );      
    }
}

export default imageScripts;