import React, { Component } from "react";

import "./App.css";
import Person from './components/Person';

class App extends Component {

    constructor() {
        super();

        this.state = {
            persons: [
                { firsName: "Jason", lastNmae: "Jafari", age: 33 },
                { firsName: "Roy", lastNmae: "Marandi", age: 30 },
                { firsName: "Sara", lastNmae: "RekabTalaei", age: 31 },
            ]
        }
    }

    render() {
        const { persons } = this.state
        return (
            <div className="App">
                <h1>Hello World!</h1>
                <hr />

                {
                    persons.map(person => (
                        <Person
                            firstName={person.firsName}
                            lastName={person.lastNmae}
                            Age={person.age}
                        />
                    ))
                }

            </div>
        );
    }
}

export default App;
