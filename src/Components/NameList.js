import React from 'react'

function NameList() {
    const persons = [
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
    const personList = persons.map(persons => <h2>I am {persons.name}. I am {persons.age} years old. I know {persons.skill}.</h2>)
  return (
    <div>
      {
        personList
      }
    </div>
  )
}

export default NameList

