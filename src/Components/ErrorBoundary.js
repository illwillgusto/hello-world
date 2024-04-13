import React, { Component } from 'react'

class ErrorBoundary extends Component {

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
  render() {
    return (
      <div>
        
      </div>
    )
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