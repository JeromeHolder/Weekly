import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Drinks from './Drinks';
import Desserts from './Desserts'

export default class Menu extends React.Component{
    render(){
        return(
            <div>
                <h2>Our Menu</h2>
                <div>
                    <h3>{this.props.deal.title}</h3>
                    <h4>{this.props.deal.description}</h4>
                    <h5>${this.props.deal.price}</h5>
                </div>
                <nav>
                    <Link to='/menu/drinks'>Drinks</Link>
                    <Link to='/menu/desserts'>Desserts</Link>
                </nav>
                <Switch>
                    <Route path='/menu/drinks' render={ ()=>{return <Drinks />} } />
                    <Route path='/menu/desserts' render={ ()=>{return <Desserts />} } />
                </Switch>
            </div>
        )
    }
}