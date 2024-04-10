/*Fragments 
-Let you group a list of children elements without adding extra nodes to the DOM
-can accept the key attribute when rendering list of items  */

import React from 'react'

function FragmentDemo() {
  return (
    <React.Fragment> {/* this allows us to remove the extra node that appeared in the DOM, 
    which could be seen in the browser's dev tools element section*/}
        <h1>
            Fragment Demo
        </h1>
        <p>This describes the fragment demo component</p>
    </React.Fragment> 
  )
}

export default FragmentDemo

