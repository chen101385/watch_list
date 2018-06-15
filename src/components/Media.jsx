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
    return (
      <div>
        <div className="Media-image">
          <img
            src={
              this.props.searchResults
                ? `https://image.tmdb.org/t/p/w200${
                    this.props.searchResults[this.state.current].poster_path
                  }`
                : null
            }
            alt=""
          />
        </div>
        <span>
          ID:{" "}
          {this.props.searchResults
            ? this.props.searchResults[this.state.current].id
            : ""}{" "}
        </span>{" "}
        <br />
        <br />
        <span>
          {" "}
          Title Name:{" "}
          {this.props.searchResults
            ? this.props.searchResults[this.state.current].original_title
            : ""}{" "}
        </span>{" "}
        <br />
        <br />
        <span>
          Average Review:{" "}
          {this.props.searchResults
            ? `${
                this.props.searchResults[this.state.current].vote_average
              } - (Reviews: ${
                this.props.searchResults[this.state.current].vote_count
              })`
            : ""}{" "}
        </span>{" "}
        <br />
        <br />
        <b> Overview </b>{" "}
        <div className="Overview">
          {" "}
          {this.props.searchResults
            ? this.props.searchResults[this.state.current].overview
            : ""}{" "}
        </div>{" "}
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
