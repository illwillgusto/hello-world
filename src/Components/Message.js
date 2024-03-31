import React, { Component } from "react"; //import the component class from React 

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    render() {
        return <h1>{this.state.message}</h1>
    }
}

export default Message;