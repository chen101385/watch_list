import React from 'react';

const GetMovies = (props) => {
    return (
        <button className="Button-padding" onClick={props.getMovies}>Get All Movies</button>
    )
}

export default GetMovies;