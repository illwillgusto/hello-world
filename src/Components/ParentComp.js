import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComponent'

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
