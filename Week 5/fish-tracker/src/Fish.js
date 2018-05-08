import React from 'react';

class Fish extends React.Component{
    render(){
        return(
            <li>
                <h2> Name: {this.props.name}</h2>
                <p>{this.props.weight} lbs</p>
                <button onClick={()=>{this.props.releaseFish(this.props.position)}} >Release {this.props.name}</button>
            </li>
        )
    }
}

export default Fish;

// <Fish name="root" weight={0}/>