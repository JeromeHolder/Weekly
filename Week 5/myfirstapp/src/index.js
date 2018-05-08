import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


class Hello extends React.Component{
    render(){
        return (
            <span>
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
            </span>
        )
    }
}

ReactDOM.render(<Hello title="Hello" content="This is the content"/>, document.getElementById('root'));
registerServiceWorker();
