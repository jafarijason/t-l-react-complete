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
                <Person />
            </div>
        );
    }
}

export default App;
