import React from 'react'

function Person({person}) { //another example of destructing the prop right in the parameter
  return (
    <div>
      <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}.</h2>
    </div>
  )
}

export default Person


// this component is responsible for rendering the person HTML