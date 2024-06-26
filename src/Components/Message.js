import React, { Component } from "react"; //import the component class from React 

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }
}

export default Message;

// a state is an object that is privately maintained inside a component 
// a state can influence what is rendered in the browser 
// state can be changed within the component 