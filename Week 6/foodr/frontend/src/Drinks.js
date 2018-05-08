import React from 'react';

export default class Drinks extends React.Component{
    render(){
        return(
            <div>
                <h2>Upstream Drink Repo</h2>
                <ul>
                    <li>
                        <h3>Origin Master</h3>
                        <h4>$3.99</h4>
                    </li>
                    <li>
                        <h3>Forked Branch</h3>
                        <h4>$3.99</h4>
                    </li>
                </ul>
            </div>
        )
    }
}