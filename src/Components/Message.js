import React, { Component } from "react"; //import the component class from React 

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button>Subscribe</button>
            </div>
        ) 
    }
}

export default Message;