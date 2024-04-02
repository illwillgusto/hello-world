import React from 'react'
import Person from './Person'

function NameList() {
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
    const personList = person.map(person => 
        <Person key={person.id} person={person} />
    )
  return (
    <div>
      {
        personList
      }
    </div>
  )
}

export default NameList

// this component is responsible for rendering the list to the Person component 
// when creating list of elements keep in mind you have to have the key prop 