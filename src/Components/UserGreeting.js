import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {

    return this.state.isLoggedIn && <div>Welcome Will</div>  // approach #4 short-circuit operator

    // return (
    //     this.state.isLoggedIn ? <div>Welcome Will</div> : <div>Welcome Guest</div>
    // ) // approach #3, this is shorter to code and cleaner, remember in JS '?' means then, ':' means else, conditional ternary operator

    // let message // element variable approach #2
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Will</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // } 

    // return <div>{message}</div>


        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Will</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // } // approach #1
    // return (
    //     <div>
    //         <div>Welcome Will</div>
    //         <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting
