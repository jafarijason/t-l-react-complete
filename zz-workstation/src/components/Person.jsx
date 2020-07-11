import React from 'react';

const Person = () => {
  return (
    <div>
      <p>Jason Jafari</p>
      <hr />
      <p>Age: {Math.floor(Math.random() * 30)}</p>
    </div>
  );
}

export default Person;