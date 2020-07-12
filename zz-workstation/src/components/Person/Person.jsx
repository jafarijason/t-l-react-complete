import React from 'react'
import './Person.css'

const Person = ({ fullName, age, personDelete,personChange }) => {
  return (
    <div style={{ cursor: "pointer" }} className="person">
      <p  >{`${fullName} - Age: ${age}`}</p>
      <input type="text" placeholder={fullName} onChange={personChange}/>
      <button onClick={personDelete} >delete</button>
    </div>
  );
}

export default Person;