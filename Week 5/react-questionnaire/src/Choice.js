import React, { Component } from 'react';

class Choice extends Component {
    render() {
        return (
            <div className="choice-outer">
                <div className="choice">
                    <p> {this.props.option} </p>
                </div>
            </div>
        );
    }
}

export default Choice;