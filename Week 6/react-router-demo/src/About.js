import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Me from './Me';
import MyDog from './MyDog';

export default class About extends React.Component{
    render(){
        return(
            <div>
                {/* A nav here will appear on about and any of its nested routes */}
                
                <h1>What I am about</h1>
                <p>I like stuff and things</p>
                <nav>
                    <Link to='/about/me'>Me</Link>
                    <Link to='/about/mydog'>MyDog</Link>
                </nav>
                <Switch>
                    <Route path='/about/me' component={Me} />
                    <Route path='/about/mydog' component={MyDog} />
                </Switch>
            </div>
        )
    }
}