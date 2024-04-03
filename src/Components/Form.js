import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          username: '',
          comments: '',
          topic: ""
       }
     }

     handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
     }

     handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value
        })
     }

     handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
     }

     handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault() // this will prevent the form from clearing the information after the alert message is exited
     }

  render() {

    
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
        </div>
        <div>
            <label>Comments</label> {/*Step 1*/}
            <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
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

/*
Controlled components for a text area as well as a select tag
1. add the element html
2. assign the component state to the element value 
3. assign an unchanged handler that updates the state  */