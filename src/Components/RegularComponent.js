import React, { Component } from 'react'

class RegularComponent extends Component {
  render() {
    console.log('****Regular Component Render****')
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegularComponent

/*a regular component does not implement the 
shouldComponentUpdate method. It always returns true by default  */
