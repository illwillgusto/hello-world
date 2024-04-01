import React, { Component } from "react"; //import the component class from React 

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props // syntax for destructing props in a class component 
        // const {state1, state2} = this.state - destructing state properties syntax 
        return <h1>Welcome {name} a.k.a {heroName}</h1>
    }
}

export default Welcome;

/* Class Components 
feature rich
private date - state 
complex UI logic
private lifecycle hooks 
Stateful/Smart/Container components 
*/

// the syntax for props is {this.props.whateveryoupropnameis}, keep in mind props are immutable 