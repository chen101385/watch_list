import React, { Component } from 'react';
import '../App.css';
import logo from '../images/Movie-Night.jpg';
import MovieAdd from './MovieAdd.jsx';
import ShowAdd from './ShowAdd.jsx';
import GetMovies from './GetMovies.jsx';
import GetShows from './GetShows.jsx';
import MovieList from './MovieList.jsx';
import ShowList from './ShowList.jsx';
import API_KEY from '../../API/API_KEY.js'
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
            this.setState({ movieList: response.data });
        }
        catch (err) {
            console.log('getMovies failed, error:', err)
        }
    }

    async getShows() {
        try {
            const response = await axios.get('/shows');
            console.log('getShows response:', response);
            this.setState({ showList: response.data });
        }
        catch (err) {
            console.log('getShows failed, error:', err)
        }
    }

    //movie should be a string;
    //response should be a string 'movie successfully added';
    async addMovie(movie) {
        try {
            await this.setState({ movie_id: this.state.movie_id + 1 })
            axios.post('/movie', { movie_id: this.state.movie_id, title: movie })
                .then(response => {
                    console.log(response)
                    this.getMovies();
                })
        }
        catch (err) {
            console.log('error adding movie:', err)
        }
    }

    async addShow(show) {
        try {
            await this.setState({ show_id: this.state.show_id + 1 })
            axios.post('/show', { show_id: this.state.show_id, title: show })
                .then(response => {
                    console.log(response)
                    this.getShows();
                })
        }
        catch (err) {
            console.log('error adding show:', err)
        }
    }

    async mediaLookup(title) {

    }

    render() {
        const { movieList, showList } = this.state;
        return (
            <div className="App">
                <header className="page-header App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to WATCH LIST!!!</h1>
                </header>
                <div className="App-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <MovieAdd
                                    addMovie={this.addMovie.bind(this)}
                                />
                            </div>
                            <div className="col-md-6">
                                <ShowAdd
                                    addShow={this.addShow.bind(this)}
                                />
                            </div>
                        </div>
                        <br />
                        <div className="Get-buttons">
                            <div>
                                <GetMovies
                                    getMovies={this.getMovies.bind(this)}
                                />
                            </div>
                            <br />
                            <br />
                            <div>
                                <GetShows
                                    getShows={this.getShows.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="list-group col-md-4">
                        <span className="List-title">Movies</span>
                        <div className="List-position">
                            <MovieList
                                movies={movieList}
                            />
                        </div>
                    </div>
                    <div className="Media-list list-group col-md-4">
                        <span className="List-title">Shows</span>
                        <div className="List-position">
                            <ShowList
                                shows={showList}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
