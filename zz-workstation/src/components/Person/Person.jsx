import React from 'react'

const Person = ({firstname, lastname, age}) => {
  return ( 
    <div>
      <p>{`${firstname} - ${lastname}- Age: ${age}`}</p>
    </div>
   );
}
 
export default Person;