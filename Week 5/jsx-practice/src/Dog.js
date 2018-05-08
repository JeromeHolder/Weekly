// This lines brings react into our file
import React from 'react';

// define our component
class Dog extends React.Component{
    render(){

        let colorMSG = 'color is ' + 'blue';

        // To do inline styling, 2 steps
        //   1) create a style object that has CSS properties inside (use camelCase instead of hyphen)
        //   2) pass that style object into the style attribute of the element you want to style
        let dogStyle={
            width: '200px',
            backgroundColor: 'tomato',
            fontFamily: 'Arial',
            display: 'inline-block'
        };

        let h2Style={
            fontSize: '6rem',
            fontFamily: 'Times New Roman',
            textAlign: 'center',
            color: 'fuchsia'
        }

        return (
            <div style={dogStyle} className="dogContainer">
                <h2 style={h2Style}>{this.props.name}</h2>
                <p> {this.props.color} </p>
                <img src="" />
            </div>
        );
    }
}

// we want the Dog component def to be available to other files, so we must export it
export default Dog;