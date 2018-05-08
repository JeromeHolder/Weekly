import React from 'react';

export default class FishForm extends React.Component{
    constructor(){
        // anytime we want to use 'this' in the constructor we must call super()
        super();
        this.collectData = this.collectData.bind(this);
    }
    collectData(event){
        // the line below prevents the page from refreshing
        event.preventDefault();

        // now we need to collect our data from the inputs
        // first grab the dom nodes for each input via refs
        let textDOMNode = this.refs.nameInput;
        let selectDOMNode = this.refs.weightInput;

        let name = textDOMNode.value;
        let weight = selectDOMNode.value;
        // OR let name = this.refs.nameInput.value; etc.

        this.props.submitCallback(name, weight);
    }
    render(){
        return (
            <form onSubmit={this.collectData}>
                <span>
                    <label>name</label>
                    <input type="text" ref="nameInput"/>
                </span>
                <span>
                    <label>weight (lbs)</label>
                    <select ref="weightInput" >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </span>
                <input type="submit"/>
            </form>
        )
    }
}