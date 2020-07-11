import React, { Component } from 'react'
import Persons from './components/Person/Persons'



class App extends Component {
  state = {
    persons: [
      { id: 1, fullName: "Jason Jafari", age: 33 },
      { id: 2, fullName: "Roy Jafari", age: 30 },
      { id: 3, fullName: "Sara Rekab Talaei", age: 31 },
    ],
    showPersons: true
  }

  handleShowPersons = () => {
    this.setState({ showPersons: !this.state.showPersons })
    console.log(this.state.showPersons)
  }

  handleDeletePerson = id => {
    //filter
    const persons = [...this.state.persons]
    const filteredPersons = persons.filter(p => p.id != id)
    this.setState({ persons: filteredPersons })
  }


  handleNameChange = (event, id) => {
    const { persons: allPersons } = this.state
    const personIndex = allPersons.findIndex(p => p.id === id)
    const person = allPersons[personIndex]
    person.fullName = event.target.value
    // console.log(event)
    allPersons[personIndex] = person
    this.setState({ persons: allPersons })
  }
  render() {
    const { persons, showPersons } = this.state
    const bottonStyle = {
      padding: "1em",
      backgroundColor: "pink"
    }
    let person = null;
    if (showPersons) {
      person = <Persons
        persons={persons}
        personDelete={this.handleDeletePerson}
        personChange={this.handleNameChange }
      />
    }
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Persons Manger</h1>
        <h4>Number of persons: {persons.length}</h4>


        <button onClick={this.handleShowPersons} style={bottonStyle}  >Persons Show</button>
        {person}
      </div>
    );
  }
}

export default App; 