import React from 'react';
import Fish from './Fish';

class FishList extends React.Component{
    render(){
        // for loop
        let fishJSX = [];
        for (let i = 0; i < this.props.fish.length; i++){
            // let currentFish = this.props.fish[i];
            fishJSX.push(<Fish name={this.props.fish[i].name} weight={this.props.fish[i].weight} releaseFish={this.props.releaseFish} position={i} key={i}/>)
        }

        // map
        // let fishJSX = this.props.fish.map((fishObject) => {
        //     return <Fish name={fishObject.name} weight={fishObject.weight} releaseFish={this.props.releaseFish}/>
        // })

        return(
            <ul>
                {/* {we want to put a bunch of <Fish /> components here} */}
                {fishJSX}
            </ul>
        )
    }
}

export default FishList;

// we want to use FishList like so:
// <FishList fish={arrayOfFish} />