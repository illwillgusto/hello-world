import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }

    static getDerivedStateFromError(error) {

        
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }


  render() {
    if (this.state.hasError) {
        return <h1>Something has gone wrong, please try again later</h1>
    }
    return this.props.children // this refers to the component we are actually rendering 
  }
}

export default ErrorBoundary

/*Error Boundary 

React components that catch JavaScript error in their child component tree,
log those errors, and display a fall-back UI.

A class component becomes an Error Boundary by defining either or both of 
the lifecycle methods; getDerivedStateFromError(error) methods and componentDidCatch(error, info) method.

getDerivedStateFromError method is used to render a fallback UI after an error is thrown.
componentDidCatchError method is used to log the error information

The placement of the Error Boundary also matters as it controls if the 
entire app should have the fall-back UI or just the component causing the problem. 

Provide a way to gracefully handle error in application code. 
*/