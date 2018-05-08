import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

let products = [
  {
    name: "socks",
    price: 2.99,
    description: "they keep your feet warm"
  },
  {
    name: "gum",
    price: 0.99,
    description: "they keep your mouth fresh"
  },  
  {
    name: "vitamix",
    price: 299,
    description: "they keep your food lit"
  },  
  {
    name: "hair gel",
    price: 2.99,
    description: "they keep your hairs gelled"
  },  
  {
    name: "headphones",
    price: 299,
    description: "they keep your ears bumpin"
  },  
];


class App extends Component {
  render() {
    let productsJSX = [];
    for(let i = 0; i < products.length; i++){
      productsJSX.push(<Product name={products[i].name} price={products[i].price} description={products[i].description} />);
    }
    return (
      <div className="App">
        {productsJSX};
      </div>
    );
  }
}

export default App;