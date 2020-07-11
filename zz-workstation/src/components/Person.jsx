import React from 'react';

const Person = ({ firstName, lastName, Age }) => {
  return (
    <div>
      <p> {`${firstName} ${lastName}`}</p>
      <p>Age: {`${Age} `}</p>
      <hr />
    </div>
  );
}

export default Person;