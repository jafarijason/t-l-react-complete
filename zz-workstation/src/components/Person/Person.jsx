import React from 'react'

const Person = ({ firstname, lastname, age, personDelete }) => {
  return (
    <div onClick={personDelete}>
      <p>{`${firstname} - ${lastname}- Age: ${age}`}</p>
    </div>
  );
}

export default Person;