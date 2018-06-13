import React, { Component } from 'react';
import '../App.css';
import logo from '../images/Movie-Night.jpg';
import MovieAdd from './MovieAdd.jsx';
import ShowAdd from './ShowAdd.jsx';
import GetMovies from './GetMovies.jsx';
import MovieList from './MovieList.jsx';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: '',
            movieList: [],
            showList: [],
            movie_id: 0,
            show_id: 0
        }
    }

    async getMovies() {
        try {
            const response = await axios.get('/movies');
            console.log('getMovies response:', response);
            this.setState({ movieList: response });
        }
        catch (err) {
            console.log('getMovies failed, error:', err)
        }
    }

    //movie should be a string;
    //response should be a string 'movie successfully added';
    async addMovie(movie) {
        try {
            await this.setState({ movie_id: this.state.movie_id + 1 })
            axios.post('/movie', { movie_id: this.state.movie_id, title: movie })
                .then(response => console.log(response))
        }
        catch (err) {
            console.log('error adding movie:', err)
        }
    }

    async addShow(show) {
        try {
            await this.setState({ show_id: this.state.show_id + 1 })
            axios.post('/show', { show_id: this.state.show_id, title: show })
                .then(response => console.log(response))
        }
        catch (err) {
            console.log('error adding show:', err)
        }
    }

    render() {
        const { movieList, showList } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to WATCH LIST!!!</h1>
                </header>
                <div className="Movie-add">
                    <MovieAdd
                        addMovie={this.addMovie.bind(this)}
                    />
                </div>
                <br />
                <div className="Show-add">
                    <ShowAdd
                        addShow={this.addShow.bind(this)}
                    />
                </div>
                <br />
                <div>
                    <GetMovies
                        getMovies={this.getMovies.bind(this)}
                    />
                </div>
                <div>
                    <MovieList
                        movies={movieList}
                    />
                </div>
            </div>
        );
    }
}

export default App;
