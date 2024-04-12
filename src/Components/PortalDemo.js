import React from 'react';
import ReactDOM from 'react-dom'; //this will allow us to move this component to the Portal element in index.html

function PortalDemo() {
  return ReactDOM.createPortal( //this will move the the component to the element of choice 
    <h1>
      Portal's Demo
    </h1>,
    document.getElementById('portal-root') //this will move the the component to the element of choice 
  )
}

export default PortalDemo


/*Portal notes
provide a way to render children into a DOM node that exists outside the DOM hierarchy 
of the parent component 

there's one DOM element in the beginning HTML that we mount the React application into. <div id="root"></div>
so when we go to out index.js file we use ReactDom.render and mount our App.js onto the root element.

React portals provide the ability to break out of the normal DOM tree, so you can render a component onto 
a DOM node that is not under the 'root' element

Portals can be brought up when dealing with a parent component's CSS when the child component's is a 
model, pop-up, or tooltip*/
