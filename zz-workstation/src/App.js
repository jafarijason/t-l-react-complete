import React, { Component } from "react";

import "./App.css";
import Person from './components/Person';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <h1>Hello World!</h1>
                <hr />
                <Person 
                firstName="Jason"
                lastName="Jafari"
                Age="25"
                 />
            </div>
        );
    }
}

export default App;
