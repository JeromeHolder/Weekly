import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FishList from './FishList';
import FishForm from './FishForm';

class App extends Component {
  constructor(){
    super();
    this.state={
      fish: [
        {
          name: "minnow",
          weight: 0
        },
        {
          name: "goldfish",
          weight: 1
        }
      ]
    };
    this.addFish = this.addFish.bind(this);
    this.releaseFish = this.releaseFish.bind(this);
  }

  releaseFish(index){
    let copy = Array.from(this.state.fish);
    copy.splice(index, 1);
    this.setState({
      fish: copy
    });
  }

  addFish(name, weight){
    // take the name and weight and use them to construct fish object
    let newFish = {
      name: name,
      weight: weight
    };

    // then using the special react way, add the fish object to the array in state
    // here's how to modify an array in state
      // step 1, make a cope of the array in state
      let copy = Array.from(this.state.fish);
      // step 2, modify the copy in the way that you want
      copy.push(newFish);
      // step 3, use setState to set the modified copy as the new array in state   
      this.setState({
        fish: copy
      });
  }

  render() {
    return (
      <div className="App">
        <FishForm submitCallback={this.addFish} />
        <FishList fish={this.state.fish} releaseFish={this.releaseFish}/>
        <button onClick={() => { this.addFish('jaws', 100) }} >add jaws</button>
      </div>
    );
  }
}

export default App;
