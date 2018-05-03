import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
        <div className='navigate'>
            <div className="btn-container">
                <button onClick={this.props.handlePrevious} className='waves-light btn btn-small grey lighten-1'><i className="material-icons">keyboard_arrow_left</i></button>
                <button onClick={this.props.handleNext}className='waves-light btn btn-small grey lighten-1'><i className="material-icons">keyboard_arrow_right</i></button>
            </div>
        </div>
        );
    }
}

export default Buttons;