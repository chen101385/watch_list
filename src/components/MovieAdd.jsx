import React from 'react';

const MovieAdd = (props) => {
    return (
        <form>
            <div className="search-title">Add Movie</div>
            <input type="text" name="moviename" />
            <br />
            <button onClick={props.addMovie()}>Submit Title</button>
        </form>
    )
}

export default MovieAdd;