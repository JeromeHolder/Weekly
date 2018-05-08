import React from 'react';
import SpaceInputs from './SpaceInputs';

export default class GameBoard extends React.Component{
    render(){
        // loop through props sent from state and send one row to SpaceInputs
        let boardContentsJSX = this.props.inputs.map((inputs, i)=>{
            return <SpaceInputs inputs={inputs} key={i}/>
        })
        return(
            <div>
                {boardContentsJSX}
            </div>
        )
    }
}