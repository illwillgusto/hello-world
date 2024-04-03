import React from 'react'

const heading = {
   fontSize: '72px',
   color: 'blue'   /*inline styling is indicated with the camelCase attribute and the style is passed as a string */
}

function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
