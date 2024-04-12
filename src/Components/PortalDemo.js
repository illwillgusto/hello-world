import React from 'react'

function PortalDemo() {
  return (
    <div>
      Portal's Demo
    </div>
  )
}

export default PortalDemo


/*Portal notes
provide a way to render children into a DOM node that exists outside the DOM hierarchy 
of the parent component 

there's one DOM element in the beginning HTML that we mount the React application into. <div id="root"></div>
so when we go to out index.js file we use ReactDom.render and mount our App.js onto the root element.

React portals provide the ability to break out of the normal DOM tree, so you can render a component onto 
a DOM node that is not under the 'root' element*/
