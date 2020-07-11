import React, { Component } from 'react'
import Persons from './components/Person/Persons'



class App extends Component {
  state = {
    persons: [
      {id: 1, firstname: "Jason", lastname: "Jafari", age: 33 },
      {id: 2, firstname: "Roy", lastname: "Marandi", age: 30 },
      {id: 3, firstname: "Sara", lastname: "RekabTalaei", age: 31 },
    ],
    showPersons: false
  }

  handleShowPersons = () => {
    this.setState({ showPersons: !this.state.showPersons })
    console.log(this.state.showPersons)
  }
  render() {
    const { persons, showPersons } = this.state
    const bottonStyle = {
      padding: "1em",
      backgroundColor: "pink"
    }
    let person = null;
    if (showPersons) {
      person = <Persons persons={persons} />
    }
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Persons Manger</h1>
        <h4>Number of persons: {persons.length}</h4>


        <button onClick={this.handleShowPersons}  style={bottonStyle}  >Persons Show</button>
        {person}
      </div>
    );
  }
}

export default App; 