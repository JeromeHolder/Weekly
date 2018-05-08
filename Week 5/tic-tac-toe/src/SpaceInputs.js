import React from 'react';

export default class SpaceInputs extends React.Component{
    render(){
        return(
            <div className='row'>
                <input onChange={} className='col-4 border border-dark fontSize text-center' type="text" placeholder='_'/>
                <input className='col-4 border border-dark fontSize text-center' type="text" placeholder='_'/>
                <input className='col-4 border border-dark fontSize text-center' type="text" placeholder='_'/>
            </div>
        )
    }
}