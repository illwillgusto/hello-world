import React, { Component } from 'react'

class ErrorBoundary extends Component {
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
the lifecycle methods; getDerivedStateFromError methods and componentDidCatch method.

The placement of the Error Boundary also matters as it controls if the 
entire app should have the fall-back UI or just the component causing the problem. 

Provide a way to gracefully handle error in application code. 
*/