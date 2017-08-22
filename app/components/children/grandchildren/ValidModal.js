import React from 'react';

class ValidModal extends React.Component {
    constructor (props) {
        super(props);
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    checkAnswer () {
        let answer = document.getElementById('answer-guest').value;
        if (this.props.guestData.answer === answer) {
            $('#valid-modal').modal('hide');
            this.props.updateVisitor();
        }
        else document.getElementById('wrong-answer').innerHTML = 'Answer is incorrect.';
    }

    render () {
        return (
            <div className='modal fade' tabIndex='-1' role='dialog' id='valid-modal'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='close' data-dismiss='modal'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                            <h4 className='modal-title pangolin-font'>Answer Question</h4>
                        </div>
                        <div className='modal-body pangolin-font'>
                            <div className='row'>
                                <div className='col-md-8 col-md-offset-2'>
                                    <label htmlFor='question-guest'>Question</label>
                                    <h2 id='question-guest'>{this.props.guestData.question}</h2>
                                    <label htmlFor='answer-guest'>Answer</label>
                                    <input type='text' className='form-control' id='answer-guest' placeholder='Answer' />
                                    <h4 className='text-center' id='wrong-answer'></h4>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer pangolin-font'>
                            <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
                            <button type='button' className='btn btn-primary' id='submit-answer' onClick={this.checkAnswer}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ValidModal;