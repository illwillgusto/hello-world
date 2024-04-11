import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    focusInput() {
        this.inputRef.current.focus()
    } //this method will focus on the input element, allows us not to use to the componentDidMount method 
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
      </div>
    )
  }
}

export default Input
