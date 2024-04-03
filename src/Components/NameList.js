import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const person = [
        {
            id: 1,
            name: 'Bruce',
            age: 29,
            skill: 'Javascript'
        },
        {
            id: 2,
            name: 'Clark',
            age: 27,
            skill: 'React'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    const NameList = names.map((name, index) => // () and index were added to the arrow function to solve the name duplicate error and the key prop will now be the index
        <h2 key={index}>{index}. {name}</h2> // index is now the key prop because there are duplicate names 
    )
  return (
    <div>
      {
        NameList
      }
    </div>
  )
}

export default NameList

// this component is responsible for rendering the list to the Person component 
// when creating list of elements keep in mind you have to have the key prop 
// a "key" is a special string attribute you NEED to include when creating lists of elements 
// keys give the elements a stable identity
// Keys help React identify which items have changed, are added, or are removed 
// Help in efficient update of the user interface 