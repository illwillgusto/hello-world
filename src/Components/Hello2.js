import React from "react";

// this is a functional component not written in JSX 

const Hello2 = () => {
    return React.createElement('div', null, React.createElement('h1', null, 'Hello Dylan'))
}

export default Hello2;

// 1st para is a string that is to be rendered "div"
// 2nd para passes any optional properties "null", since there isn't any additional properties
// 3rd para is the child of the "div" tag which is "Hello Dylan"
// to include the 'h1' attribute you will have to be React.createElement to get the correct output 
// null can be replaced with an ID attribute which would look like {id: hello}
// you can also add a class as well which would look like {id: "hello", class="dummy"}