import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComponent'
import MemoComp from './MemoComp'

class ParentComp extends Component {

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
        <MemoComp name={this.state.name} />
        {/* <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp

//changed this component to a pure component
// note this is the parent component and pure components only re-render on change, so the child component won't re-render 