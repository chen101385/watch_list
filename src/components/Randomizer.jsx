import React, { Component } from "react";

class Randomizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomMedia: ""
    };
  }

  handleClick(e) {
      let obj = this.props.randomizer();
      e.preventDefault();
      this.setState({randomMedia: obj.title}, () => this.props.mediaLookup(obj.title))
  }

  render() {
    return (
      <div className="Randomizer">
        <button
          className="Randomizer-button btn btn-danger"
          onClick={e => this.handleClick(e)}
        >
          {" "}
          Generate Random {this.props.media ? this.props.media : " Media"}{" "}
        </button>
        <br />

        <span className="Random-media"><mark>{this.state.randomMedia ? this.state.randomMedia : ""}</mark></span>
      </div>
    );
  }
}

export default Randomizer;
