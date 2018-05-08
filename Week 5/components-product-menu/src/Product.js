import React from 'react';

function buttonClickHandler(){
    window.alert('Button was clicked!');
}

function h2ClickHandler(){
    console.log('h2 clicked')
}


class Product extends React.Component{
    render(){
        return (
            <div>
                <h2 onClick={h2ClickHandler}> {this.props.name} </h2>
                <h3 onClick={()=>{window.alert('Price clicked')}}> ${this.props.price} </h3>
                <p> {this.props.description} </p>
                <button onClick={buttonClickHandler}> Buy Product </button>
            </div>
        )
    }
}

export default Product;