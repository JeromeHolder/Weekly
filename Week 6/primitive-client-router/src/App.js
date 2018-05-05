import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import About from './About';

class App extends Component {
  constructor(){
    super();
    this.state = {
      page: "home"
    }
    this.goToPage = this.goToPage.bind(this);
    // this.goToAbout = this.goToAbout.bind(this);
    // this.goToHome = this.goToHome.bind(this);
  }

  goToPage(nextPage){
    this.setState({
      page: nextPage
    });
  }

  // goToAbout(){
  //   this.setState({
  //     page: 'about'
  //   });
  // }

  // goToHome(){
  //   this.setState({
  //     page: 'home'
  //   });
  // }

  render() {

    let contentJSX;
    if(this.state.page === 'home'){
      contentJSX = <Home />;
    }
    else if (this.state.page === 'about'){
      contentJSX = <About />;
    }

    return (
      <div className="App">
        <nav>
          <button onClick={() => {this.goToPage('home')}}>Home</button>
          <button onClick={() => {this.goToPage('about')}}>About</button>
        </nav>
        {contentJSX}
      </div>
    );
  }
}

export default App;
