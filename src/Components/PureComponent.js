import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('****Pure Component Render****')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp


/*a pure component implements shouldComponentUpdate method with 
a shallow props and state comparison 

Shallow Comparison (SC)
Primitive Types-
numbers, strings, and boolean 
a (SC) b returns true if a and b have the same value and are of the same type
Ex: string 'Will'(SC) string 'Will' are the same in value and type so the return will be true 

Complex Types-
objects & arrays 
a(SC) b returns true if a and b reference the exact same object

Pure Component -

SC of prevState with currentState
SC of prevProps with currentProps
so with that only when there is a difference between the prev and current will the component re-render 
 */