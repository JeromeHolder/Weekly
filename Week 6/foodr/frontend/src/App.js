import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state={
      deal: {}
    };
  }

  componentWillMount(){
    // Use request to hit the backend to get the deal data
    // request.get('http://localhost:8080/dailydeals', (err, res, body)=>{
    //   if(err){
    //     window.alert('I am Error!');
    //   }
    //   else{
    //     this.setState({
    //       deal: JSON.parse(body)
    //     })
    //   }
    // })
    // Once we get it we set it on state

    // using axios
    axios.get('http://localhost:8080/dailydeals')
         .then(result => {
           this.setState({
             deal: result.data
           });
         })
         .catch(error => {
           console.log(error);
         })

  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
            </nav>
            <Switch>
              <Route exact path='/' render={ ()=>{return <Home />} } />
              <Route path='/menu' render={ ()=>{return <Menu deal={this.state.deal} />} } />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
