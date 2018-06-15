import React from 'react';

const Listing = (props) => {
    return (
        <span>
            <a href="#" className="list-group-item">
            {props.title}
            </a>
        </span>
    )
}

export default Listing;


