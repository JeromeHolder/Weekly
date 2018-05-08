import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dog from './Dog';

const dogs = [
  {
    name: 'snoop',
    color: 'red'
  },
  {
    name: 'lassie',
    color: 'gold'
  },
  {
    name: 'poochie',
    color: 'brown'
  },
  {
    name: 'beethoven',
    color: 'marble'
  },
  {
    name: 'kobe',
    color: 'tan & white'
  }
]

class App extends Component {
  render() {

    let yetAnotherDog = <Dog />;
    let aGangOfDogs = [];
    for(let i = 0; i < dogs.length; i++){
      let isntance = <Dog name={dogs[i].name} color={dogs[i].color} />
      aGangOfDogs.push(isntance);
    }

    return (
      <div className="App">
        {aGangOfDogs}


        {/*}
        <Dog name="Snoop" color="tomato"/>
    <Dog name="Nate" color="skyblue" /> */}
      </div>
    );
  }
}

export default App;
