import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import CurrentlyListeningTo from './CurrentlyListeningTo';
import CurrentlyWatching from './CurrentlyWatching';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Currently Watching</Link>
            <Link to='/listening'>Currently Listening</Link>
          </nav>
          <Switch>
            <Route exact path='/' render={ ()=>{return <CurrentlyWatching />}} />
            <Route path='/listening' render={ ()=>{return <CurrentlyListeningTo />}} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
