import React from 'react';

const Person = props => {
  return (
    <div>
      <p> {`${props.firstName} ${props.lastName}`}</p>
      <hr />
      <p>Age: {`${props.Age} `}</p>
    </div>
  );
}

export default Person;