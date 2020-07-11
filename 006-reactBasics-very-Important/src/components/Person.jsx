import React from 'react';

const Person = ({ firstName, lastName, Age, children }) => {
  return (
    <div>
      <p> {`${firstName} ${lastName}`}</p>
      <p>Age: {`${Age} `}</p>
      <p>{children}</p>
      <hr />
    </div>
  );
}

export default Person;