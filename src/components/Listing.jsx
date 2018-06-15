import React from 'react';

const Listing = (props) => {
    return (
        <div className="List-spacing">
            <span>
            <a className="list-group-item" onClick={() => props.mediaLookup(props.title)}>
            {props.title}
            </a>
        </span>
        </div>
    )
}

export default Listing;


