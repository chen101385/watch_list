import React from 'react';

const GetMovies = (props) => {
    return (
        <button onClick={props.getMovies}>Get Movies</button>
    )
}

export default GetMovies;