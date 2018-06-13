import React from 'react';
import Listing from './Listing.jsx';

const MovieList = (props) => {
    return (
        props.movies.map(movie => <Listing title={movie.title}/>)
    )
}

export default MovieList;