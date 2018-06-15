import React, { Component } from "react";

class Media extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0
    };
  }

  previous() {
    if (this.state.current) {
      this.setState({
        current: this.state.current - 1
      });
    }
  }

  next() {
    if (this.state.current < this.props.searchResults.length - 1)
      this.setState({
        current: this.state.current + 1
      });
  }

  render() {
    let result = this.props.searchResults
      ? this.props.searchResults[this.state.current]
      : null;
    let searchResults = this.props.searchResults
      ? this.props.searchResults
      : null;
    return (
      <div>
        <div className="Media-image">
          <img
            src={
              searchResults
                ? `https://image.tmdb.org/t/p/w200${result.poster_path}`
                : null
            }
            alt=""
          />
        </div>
        <span>ID: {searchResults ? result.id : ""} </span> <br />
        <br />
        <span>
          {" "}
          Title Name:{" "}
          {searchResults
            ? result.original_title
              ? result.original_title
              : result.original_name
            : ""}{" "}
        </span>{" "}
        <br />
        <br />
        <span>
          Average Review:{" "}
          {searchResults
            ? `${result.vote_average} - (Reviews: ${result.vote_count})`
            : ""}{" "}
        </span>{" "}
        <br />
        <br />
        <b> Overview </b>{" "}
        <div className="Overview"> {searchResults ? result.overview : ""} </div>{" "}
        <div>
          <button className="Selection-button" onClick={() => this.previous()}>
            {" "}
            Previous{" "}
          </button>{" "}
          <button className="Selection-button" onClick={() => this.next()}>
            {" "}
            Next{" "}
          </button>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Media;
