import React, { Component } from 'react';
import '../App.css';
import logo from '../images/Movie-Night.jpg';
import MovieAdd from './MovieAdd.jsx';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to WATCH LIST!!!</h1>
                </header>
                <p className="App-intro">
                    <MovieAdd />
                </p>
            </div>
        );
    }
}

export default App;
