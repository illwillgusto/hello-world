import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
        console.log('You clicked the button')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me!</button> 
      </div>
    )
  }
}

export default ClassClick

// when handling event handlers in class components keep in mind that you will also declare a function within the function
// you will also use the 'this' keyword prior to the eventHandler and don't add () to the end, this will be a function call then 