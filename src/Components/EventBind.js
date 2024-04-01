import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Wassup'
      }
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye' // this will work with the assist of the bind method, which was added in the onClick 
        })
        console.log(this)
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button> 
      </div>
    )
  }
}

export default EventBind
