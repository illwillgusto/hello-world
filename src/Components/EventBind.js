import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Wassup'
      }

    //   this.clickHandler = this.clickHandler.bind(this) // binding in this approach #3 is recommended 
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye' // this will work with the assist of the bind method, which was added in the onClick 
    //     })
    //     console.log(this)
    // }
    
    clickHandler = () => {
        this.setState({
            message: "Goodbye"
        })
    } //approach #4

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  approach 1*/} 
        {/* <button onClick={() => this.clickHandler()}>Click</button>  approach 2*/}
        <button onClick={this.clickHandler}>Click</button> 
      </div>
    )
  }
}

export default EventBind

// approach 1 allows binding to be in the render method 
// approach 2 is to use arrow functions in the render method
// the function body is a single statement, the event handler is being called and returning that value 
// this is why you see () after the event handler and are required  
// approach 3, best approach, binding the event handler in the constructor 
// approach 4, use an arrow function as a class property 