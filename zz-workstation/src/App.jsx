import React, { Component } from 'react'
import Persons from './components/Person/Persons'


class App extends Component {
  state = {
    persons: [
      { firstname: "Jason", lastname: "Jafari", age: 33 },
      { firstname: "Roy", lastname: "Marandi", age: 30 },
      { firstname: "Sara", lastname: "RekabTalaei", age: 31 },
    ]
  }
  render() {
    const { persons } = this.state
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Every things are good.</h1>

        <Persons persons={persons} />
      </div>
    );
  }
}

export default App; 