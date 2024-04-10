import React, { Component, PureComponent } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComponent'

class ParentComp extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Will'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Will'
            })
        }, 2000)
    }
    
  render() {
    console.log('****Parent Component Render****') // allow us to know when the render method is called in each of the components
    return (
      <div>
        Parent Component
        <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp

//changed this component to a pure component
// note this is the parent component and pure components only re-render on change, so the child component won't re-render 