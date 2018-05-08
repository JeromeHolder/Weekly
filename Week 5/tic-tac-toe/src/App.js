import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard';

class App extends Component {
  constructor(){
    super();
    this.state={
      inputs: [
        ['','',''],
        ['','',''],
        ['','',''],
      ]
    }
  }

  playInput = (play) => {
    
  }

  render() {
    return (
      <div className="App container">
        <h1>Tic-Tac-Toe</h1>
        <GameBoard inputs={this.state.inputs}/>
      </div>
    );
  }
}

export default App;
