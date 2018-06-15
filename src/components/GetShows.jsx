import React from 'react';

const GetShows = (props) => {
    return (
        <button className="Button-padding btn btn-info" onClick={props.getShows}>Get All Shows (toggle)</button>
    )
}

export default GetShows;