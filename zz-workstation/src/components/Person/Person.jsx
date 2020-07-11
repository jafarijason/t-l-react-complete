import React from 'react'

const Person = ({ fullName, age, personDelete,personChange }) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <p  >{`${fullName} - Age: ${age}`}</p>
      <input type="text" placeholder={fullName} onChange={personChange}/>
      <button onClick={personDelete} >delete</button>
    </div>
  );
}

export default Person;