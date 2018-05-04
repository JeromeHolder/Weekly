import React, { Component } from 'react';
import './App.css';
import PokemonWidget from './PokemonWidget';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonWidget type='psychic'/>
      </div>
    );
  }
}

export default App;
