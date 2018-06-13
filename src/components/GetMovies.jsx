import React from 'react';

const GetMovies = (props) => {
    return (
        <button onClick={props.getMovies}>Get All Movies</button>
    )
}

export default GetMovies;