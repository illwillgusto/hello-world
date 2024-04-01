import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    // increment() {
    //     this.state.count = this.state.count + 1
    //     console.log(this.state.count)
    // } // never modify the state directly, this will only show the increment change in the clg 

    increment() {
        this.setState({ // the setState helps avoid the issue above, allows you not to directly modify the state 
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

  render() {
    return (
      <div>
       <div>Count - {this.state.count}</div> 
       <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter
