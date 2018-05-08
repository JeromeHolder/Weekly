import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoodBoard from './MoodBoard'

class App extends Component {
  // if a component has a state, it must have a constructor method to initialize it
  constructor(){
    // If we have state, in the constructor we must call super()
    // We must call super before we use 'this' in the constructor
    super();
    // in a constructor, 'this' will point to the new object being constructed

    // in this react case, the new object represents a new copy of this component
    // it's inside this new object that state will live
    this.state = {
      timesClicked: 0
    };

    // here we are creating another version of the clickHandler method where we force 'this' to point to the component object
    // then we assign that bound version to this.clickHandler
    // this ensures that when clickHandler runs >>
    this.clickHandler = this.clickHandler.bind(this); 
  }
  
  // if you have a function that changes state, it must live inside the component
  clickHandler(){
    console.log('clickHandler ran');
    // we must use this.setState to change states
    // This is how react knows that state changed
    // we provide to setState an object that specifies the new values for any state properties that are changing
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  render() {
    return (
      <div className="App">
        <h2>I have been clicked {this.state.timesClicked} times</h2>
        <button onClick={this.clickHandler}>Click me if you dare</button>
        <MoodBoard />
      </div>
    );
  }
}

export default App;
