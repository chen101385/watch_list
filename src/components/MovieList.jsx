import React from "react";
import Listing from "./Listing.jsx";

const MovieList = props => {
  if (props.displayMovies) {
    return props.movies.map(movie => (
      <Listing
        key={movie._id}
        title={movie.title}
        mediaLookup={props.movieLookup}
      />
    ));
  } else {
    return ("")
  }
};

export default MovieList;
