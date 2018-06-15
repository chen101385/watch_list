import React, { Component } from 'react';
import Randomizer from './Randomizer.jsx'


class ShowAdd extends Component {
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
        this.props.addShow(this.state.input);
        this.setState({ input: '' });
    }

    render() {
        return (
            <form>
                <div className="search-title">Add Show Title</div>
                <input
                    type="text"
                    onChange={this.handleChange.bind(this)}
                    name="moviename"
                    value={this.state.input} 
                    size="40"
                    />
                <br />
                <br />
                <button className="btn btn-lg btn-success" onClick={this.handleClick.bind(this)}>Submit Show</button>
                <br />
                <Randomizer
                    randomizer={this.props.showRandomizer}
                    media={"Show"}
                    mediaLookup={this.props.showLookup}
                />
            </form>
        )
    }
}

export default ShowAdd;