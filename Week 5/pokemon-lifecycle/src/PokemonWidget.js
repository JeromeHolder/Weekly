import React from 'react';
import request from 'request';
import PropTypes from 'prop-types';

// here is a simple dumb component, which can be written as just a function
// here, we are pretty much just writing the render method
// react will pass the props to this function so we can use them
let Pokemon = (props)=>{
    return (
        <li>{props.name}</li>
    )
}

export default class PokemonWidget extends React.Component{
    constructor(){
        super();
        this.state = {
            pokemon: []
        };
    }

    componentWillMount(){
        // console.log('Pokemon Component Mounted');
        // when our component is about to get put on the page
        // we can make an API call to get data
        request(`https://pokeapi.co/api/v2/type/${this.props.type}/`, (err, res, body)=>{
            if(err){
                window.alert(err);
            }
            else {
                body = JSON.parse(body);
                // console.log(body);
                // once we have the data, we load it into state, which causes the components to re-render and show the data
                this.setState({
                    pokemon: body.pokemon
                });
            }
        })
    }

    componentDidUpdate(){
        console.log('now we can see updated state!\n', this.state)
    }

    render(){

        let pokemonJSX = this.state.pokemon.map((pokeObject)=>{
            return <Pokemon key={pokeObject.pokemon.url} name={pokeObject.pokemon.name}/>
        })

        return(
            <div>
                <h2>Pokemon Widget</h2>
                <h3>{this.state.pokemon.length} {this.props.type} pokemon found </h3>
                {pokemonJSX}
            </div>
        )
    }
}

PokemonWidget.propTypes = {
    type: PropTypes.string.isRequired
}