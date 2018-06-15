import React from "react";

const Media = props => {
    let results = props.searchResults;
    return (
      <div>
        <span>ID: {results ? results[0].id : ""}</span>
        <br />
        <br />
        <span>
          {" "}
          Title Name:{" "}
          {results ? results[0].original_title : ""}{" "}
        </span>
        <br />
        <br />
        <span>
          Average Review:{" "}
          {results
            ? `${results[0].vote_average} - (Reviews: ${
                results[0].vote_count
              })`
            : ""}{" "}
        </span>
        <br />
        <br />
        <span><b>Overview</b></span>
        <div className="Overview">
          {results ? results[0].overview : ""}
        </div>
      </div>
    );
}

export default Media;
