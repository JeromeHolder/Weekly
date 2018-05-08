import React from 'react';

class MoodBoard extends React.Component{
    constructor(){
        super();
        this.state = {
            mood: 'medium'
        }
        this.setMood = this.setMood.bind(this);
    }

    setMood(moodToSet){
        this.setState({
            mood: moodToSet
        });
    }

    render(){

        let msg;

        if (this.state.mood === 'sad'){
            msg = 'do not worry, be less sad'
        }
        else if (this.state.mood === 'medium'){
            msg = 'all good'
        }
        else {
            msg = 'keep it up'
        }

        return (
            <div>
                <h2> { msg } </h2>
                <button onClick={()=>{ this.setMood('sad')}}> :-( </button>
                <button onClick={()=>{ this.setMood('medium')}}> :-/ </button>
                <button onClick={()=>{ this.setMood('happy')}}> :-) </button>
            </div>
        );
    }
}

export default MoodBoard;