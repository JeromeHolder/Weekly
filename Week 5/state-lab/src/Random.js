import React from 'react'

class Random extends React.Component{
    constructor(){
        super();
        this.state = {
            randNum: 0
        }
        this.randomNumberGenerator = this.randomNumberGenerator.bind(this)
    }

    randomNumberGenerator(){
        this.setState({
            randNum: Math.floor(Math.random()*100)
        })
    }

    render(){
        return(
            <div>
                <h2>The random number is {this.state.randNum}</h2>
                <button onClick={this.randomNumberGenerator}>Generate Random Number</button>
            </div>
        )
    }
}

export default Random;