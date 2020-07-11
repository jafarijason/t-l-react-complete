import React from 'react'
import Person from './Person'

const Persons = ({ persons, personDelete }) => {
  // console.log(persons)
  return (
    <div>
      {
        persons.map(person => (
          <Person
            firstname={person.firstname}
            lastname={person.lastname}
            age={person.age}
            key={person.id}
            personDelete={()=>personDelete(person.id)}
          />
        ))
      }
    </div>
  );
}

export default Persons;