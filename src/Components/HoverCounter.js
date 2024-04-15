import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
 
  render() {
    const {count} = this.state
    return <h2 onMouseOver={this.incrementCount}>{this.props.name} Hover { count } Times</h2>
  }
}

export default withCounter(HoverCounter)
