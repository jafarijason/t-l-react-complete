import React from 'react';

const Person = ({firstName, lastName, Age}) => {
  return (
    <div>
      <p> {`${firstName} ${lastName}`}</p>
      <hr />
      <p>Age: {`${Age} `}</p>
    </div>
  );
}

export default Person;