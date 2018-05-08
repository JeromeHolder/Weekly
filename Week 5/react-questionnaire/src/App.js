import React, { Component } from 'react';
import './App.css';
import Question from './Question';
import Choice from './Choice';
import questions from './data';

class App extends Component {
  constructor(){
    super();
    this.state={
      questions:questions,
      progress: 0
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handleNext() {
    if(this.state.progress < this.state.questions.length - 1){
      this.setState({
        progress: this.state.progress + 1
      })
    } else{
      this.setState({
        progress: 0
      })
    }

  }

  handlePrevious(){
    if(this.state.progress > 0){
      this.setState({
        progress: this.state.progress - 1
      })
    } else {
      this.setState({
        progress: this.state.questions.length-1
      })
    }
  }

  render() {
    let choicesJSX = [];
    for(let i = 0; i < this.state.questions[this.state.progress].options.length; i++){
      choicesJSX.push(<Choice key={i} option={this.state.questions[this.state.progress].options[i]}/>)
    }
    return (
      <div className="App">
        <div className="row">
          {/* Question Box */}
          <Question questions={this.state.questions} progress={this.state.progress} handleNext={this.handleNext} handlePrevious={this.handlePrevious}/>
            {/* Choices */}
            <div className="col s12 l7 choice-container">
              <div className="row">
                {/* Individual Choice */}
                {choicesJSX}
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
