import React from "react";

// function Greet() {
//      return <h1>Hello Will</h1>   
// }

const Greet = ({name, heroName}) => { // adding the prop names here is destructing in the parameters 
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1> 
        </div>
    )
}

export default Greet // this allows you to import to another component but you can make this easier with a named export


/*Functional Component 
Simple Functions receiving props and returning a declaration 
should try to use the functional components as much as possible 
-the absence of 'this' keyword, it can be tricky at times
-forced to think of a solution without using state, no complicated logic 
-Mainly responsible for the UI
-State /Dumb/ Presentational  */

// props allow us to repeat a component with different results
/*Props
the syntax and how it is implemented in the arrow function 
when props are added a return must be established 
{props} is needed so react can evaluate the JSX expression  */