import React from 'react';

const GetShows = (props) => {
    return (
        <button className="Button-padding" onClick={props.getShows}>Get All Shows</button>
    )
}

export default GetShows;