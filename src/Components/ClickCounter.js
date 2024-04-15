import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
    
  render() {
    const { count } = this.state
     return  <button onClick={this.incrementCount}>{this.props.name} Clicked { count } Times</button>
  }
}

export default withCounter(ClickCounter)
