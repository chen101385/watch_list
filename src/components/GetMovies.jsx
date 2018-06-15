import React from 'react';

const GetMovies = (props) => {
    return (
        <button className="Button-padding btn btn-warning" onClick={props.getMovies}>Get All Movies (toggle)</button>
    )
}

export default GetMovies;