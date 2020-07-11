import React from 'react'
import Person from './Person'

const Persons = ({ persons, personDelete, personChange }) => {
  // console.log(persons)
  return (
    <div>
      {
        persons.map(person => (
          <Person
            fullName={person.fullName}

            age={person.age}
            key={person.id}
            personDelete={() => personDelete(person.id)}
            personChange={(event) => personChange(event, person.id)}
          />
        ))
      }
    </div>
  );
}

export default Persons;