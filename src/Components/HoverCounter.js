import React, { Component } from 'react'

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>Hover X Times</h2>
      </div>
    )
  }
}

export default HoverCounter
