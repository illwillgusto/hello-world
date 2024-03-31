import React, { Component } from "react"; //import the component class from React 

class Welcome extends Component {
    render() {
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
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