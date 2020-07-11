import React, { Component } from "react";

import "./App.css";
import Person from './components/Person';

class App extends Component {

    constructor() {
        super();
        // this.handlePersonChange = this.handlePersonChange.bind(this)

        // this.state = {
        //     persons: [
        //         { firsName: "Jason", lastNmae: "Jafari", age: 33 },
        //         { firsName: "Roy", lastNmae: "Marandi", age: 30 },
        //         { firsName: "Sara", lastNmae: "RekabTalaei", age: 31 },
        //     ]
        // }
    }

    state = {
        persons: [
            { firsName: "Jason", lastNmae: "Jafari", age: 33 },
            { firsName: "Roy", lastNmae: "Marandi", age: 30 },
            { firsName: "Sara", lastNmae: "RekabTalaei", age: 31 },
        ]
    }

    // handlePersonChange() {
    //     this.setState({
    //         persons: [
    //             { firsName: "JasonU", lastNmae: "JafariU", age: 34 },
    //             { firsName: "RoyU", lastNmae: "MarandiU", age: 31 },
    //             { firsName: "SaraU", lastNmae: "RekabTalaeiU", age: 32 },
    //         ]
    //     })
    // }


    handlePersonChange = () => {
        this.setState({
            persons: [
                { firsName: "JasonU", lastNmae: "JafariU", age: 34 },
                { firsName: "RoyU", lastNmae: "MarandiU", age: 31 },
                { firsName: "SaraU", lastNmae: "RekabTalaeiU", age: 32 },
            ]
        })
    }

    render() {
        const { persons } = this.state
        return ( <
            div className = "App" >
            <
            h1 > Hello World! < /h1> <
            hr / >

            {
                persons.map(person => ( <
                    Person firstName = { person.firsName }
                    lastName = { person.lastNmae }
                    Age = { person.age }
                    key = { person.age }
                    />
                ))
            } <
            hr / >
            <
            button onClick = { this.handlePersonChange } > Update Persons < /button> <
            /div>
        );
    }
}

export default App;