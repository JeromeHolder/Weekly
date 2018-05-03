import React, { Component } from 'react';
import Buttons from './Buttons';

class Question extends Component {
    render() {
        return (
            <div className='col s12 l5'>
                <div className="question-container">
                    <div className="question-header">
                        <h3>Question</h3>
                    </div>
                    <div className='question-content'>
                        <p>{this.props.questions[this.props.progress].question}</p>
                    </div>
                </div>
                <Buttons handleNext={this.props.handleNext} handlePrevious={this.props.handlePrevious}/>
            </div>
        );
    }
}

export default Question;