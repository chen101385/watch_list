import React, { Component } from "react";
import "../App.css";
import logo from "../images/Movie-Night.jpg";
import MovieAdd from "./MovieAdd.jsx";
import ShowAdd from "./ShowAdd.jsx";
import GetMovies from "./GetMovies.jsx";
import GetShows from "./GetShows.jsx";
import MovieList from "./MovieList.jsx";
import ShowList from "./ShowList.jsx";
import Media from "./Media.jsx";
import key from "../API/API_KEY.js";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      movieList: [],
      showList: [],
      movie_id: 0,
      searchResults: null,
      displayMovies: false,
      displayShows: false
    };
  }

  async getMovies() {
    try {
      const response = await axios.get("/movies");
      this.setState({
        movieList: response.data,
        displayMovies: this.state.displayMovies ? false : true
      });
    } catch (err) {
      console.log("getMovies failed, error:", err);
    }
  }

  async getShows() {
    try {
      const response = await axios.get("/shows");
      this.setState({
        showList: response.data,
        displayShows: this.state.displayShows ? false : true
      });
    } catch (err) {
      console.log("getShows failed, error:", err);
    }
  }

  //movie should be a string;
  //response should be a string 'movie successfully added';
  async addMovie(movie) {
    try {
      await this.setState({
        movie_id: this.state.movie_id + 1
      });
      axios
        .post("/movie", {
          movie_id: this.state.movie_id,
          title: movie
        })
        .then(response => {
          console.log(response);
          if (this.state.displayMovies) {
            this.setState({
              displayMovies: this.state.displayMovies ? false : true
            });
            this.getMovies();
          }
        });
    } catch (err) {
      console.log("error adding movie:", err);
    }
  }

  async addShow(show) {
    try {
      await this.setState({
        show_id: this.state.show_id + 1
      });
      axios
        .post("/show", {
          show_id: this.state.show_id,
          title: show
        })
        .then(response => {
          console.log(response);
          if (this.state.displayShows) {
            this.setState({
              displayShows: this.state.displayShows ? false : true
            });
            this.getShows();
          }
        });
    } catch (err) {
      console.log("error adding show:", err);
    }
  }

  movieLookup(title) {
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            key.API_KEY
          }&query=${title}`
        )
        .then(response => {
          console.log("this is MOVIE lookup response", response);
          //figure out how to incorporate response into state
          //an array; [0] {id, original_title, overview, vote_average, vote_count}
          this.setState({
            searchResults: response.data.results
          });
        });
    } catch (err) {
      console.log("media lookup FAILED!:", err);
    }
  }

  showLookup(title) {
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=${
            key.API_KEY
          }&query=${title}`
        )
        .then(response => {
          console.log("this is TV SHOW lookup response", response);
          //figure out how to incorporate response into state
          //an array; [0] {id, original_title, overview, vote_average, vote_count}
          this.setState({
            searchResults: response.data.results
          });
        });
    } catch (err) {
      console.log("media lookup FAILED!:", err);
    }
  }

  movieRandomizer() {
    return this.state.movieList[
      Math.floor(Math.random() * this.state.movieList.length)
    ];
  }

  showRandomizer() {
    return this.state.showList[
      Math.floor(Math.random() * this.state.showList.length)
    ];
  }

  async componentWillMount() {
    try {
      const showResponse = await axios.get("/shows"),
        movieResponse = await axios.get("/movies");

      this.setState({
        showList: showResponse.data,
        movieList: movieResponse.data
      });
    } catch (err) {
      console.log("initial show & movie loading failed :", err);
    }
  }

  render() {
    const {
      movieList,
      showList,
      searchResults,
      displayMovies,
      displayShows
    } = this.state;
    return (
      <div className="App">
        <header className="page-header App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Welcome to WATCH LIST!!! </h1>{" "}
        </header>{" "}
        <div className="App-body">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <MovieAdd
                  addMovie={this.addMovie.bind(this)}
                  movieRandomizer={this.movieRandomizer.bind(this)}
                  movieLookup={this.movieLookup.bind(this)}
                />{" "}
              </div>{" "}
              <div className="col-md-6">
                <ShowAdd
                  addShow={this.addShow.bind(this)}
                  showRandomizer={this.showRandomizer.bind(this)}
                  showLookup={this.showLookup.bind(this)}
                />{" "}
              </div>{" "}
            </div>{" "}
            <br />
            <div className="Get-buttons">
              <div>
                <GetMovies getMovies={this.getMovies.bind(this)} />{" "}
              </div>{" "}
              <div>
                <GetShows getShows={this.getShows.bind(this)} />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="list-group col-md-4">
            <p className="List-title"> Movies </p>{" "}
            <div className="List-position">
              <ul>
                <MovieList
                  movies={movieList}
                  movieLookup={this.movieLookup.bind(this)}
                  displayMovies={displayMovies}
                />{" "}
              </ul>
            </div>{" "}
          </div>{" "}
          <div className="list-group col-md-4">
            <p className="List-title"> Shows </p>{" "}
            <div className="List-position">
              <ul>
                <ShowList
                  shows={showList}
                  showLookup={this.showLookup.bind(this)}
                  displayShows={displayShows}
                />{" "}
              </ul>
            </div>{" "}
          </div>{" "}
          <div className="Media-list list-group col-md-4">
            <p className="List-title">Media Info</p>{" "}
            <div className="Media-description">
              <Media searchResults={searchResults} />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
