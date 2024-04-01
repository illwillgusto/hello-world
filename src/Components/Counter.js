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
        // this.setState({ // the setState helps avoid the issue above, allows you not to directly modify the state 
        //     count: this.state.count + 1
        // }, () => {console.log('Callback value', this.state.count)})

        this.setState((prevState) => ({ // prevState allows us to use the previous state and not the current state like above
            count: prevState.count + 1 // this will give us the results to have the increment count in sets of 5
        }))
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
      <div>
       <div>Count - {this.state.count}</div> 
       <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
