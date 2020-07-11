import React from 'react'
import Person from './Person'

const Persons = ({ persons }) => {
  // console.log(persons)
  return (
    <div>
      {
        persons.map(perosn => (
          <Person
            firstname={perosn.firstname}
            lastname={perosn.lastname}
            age={perosn.age}
            key={perosn.id}
          />
        ))
      }
    </div>
  );
}

export default Persons;