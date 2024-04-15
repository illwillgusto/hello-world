import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Clicked X Times</button>
      </div>
    )
  }
}

export default ClickCounter
