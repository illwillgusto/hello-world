import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef() //this allows for them to be referenced throughout the component 
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/><br/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo


/*Refs
Make it possible to access Dom nodes directly within React 

1. within the constructor you will create a new property, 'this.inputRef = React.createRef()', this allows for the 
reference to be referenced throughout the component.
2. attach the ref to the input element in the JSX, within the render method, you will use the reserve ref attribute =
ref={the reference prop you declared in the constructor}.
3. call the focus method on the input element, use the componentDidUpdate method between the constructor and the render,
you will have to use the following syntax, this.inputRef.current.focus()


You can also use refs to fetch the input value 
  */
