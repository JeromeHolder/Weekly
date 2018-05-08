import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Aquarium extends React.Component{
    render(){
        return (
            <div>
                <h1>bikini bottom</h1>
                <Fish />
                <Fish />
                <Fish />
            </div>
        )
    }
}



class Fish extends React.Component{
    render(){
        return (
            <div>
                <h1>Drake</h1>
                <p>swims in water, started from the bottom, now he's a fish</p>
            </div>
        )
    }
}


// This function, ReactDOM.render() puts some react component on the page
// It takes 2 arguments:
//      1) some component INSTANCE to put on the page
//      2) some DOM element we want to put the component in on our page
//          - most of the time we will grab the DOM element using document.getELementById()
ReactDOM.render(<Aquarium />, document.getElementById('root'));
registerServiceWorker();
