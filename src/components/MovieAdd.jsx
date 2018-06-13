import React, { Component } from 'react';


class MovieAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }
    }

    handleChange(e) {
        this.setState({ input: e.target.value });
    }

    handleClick(e) {
        //default button action is to submit form; refreshes pages.   
        e.preventDefault();
        this.props.addMovie(this.state.input);
        this.setState({ input: '' });
    }

    render() {
        return (
            <form>
                <div className="search-title">Add Movie Title</div>
                <input
                    type="text"
                    onChange={this.handleChange.bind(this)}
                    name="moviename"
                    value={this.state.input}
                    size="40"
                />
                <br />
                <br />
                <button className="btn btn-lg btn-primary" onClick={this.handleClick.bind(this)}>Submit Movie</button>
            </form>
        )
    }
}

export default MovieAdd;