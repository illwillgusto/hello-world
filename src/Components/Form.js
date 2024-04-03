import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          username: ''
       }
     }

     handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
     }

  render() {

    
    return (
      <form>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
        </div>
      </form>
    )
  }
}

export default Form


// username is set as a state property 
// which is applied as a value to the value attribute of the input element 
// whenever there's a new change the new value is propagated to handleUsernameChange 
// which sets back the state property to the updated value 
// when the state is set the render method is called back to the new value 