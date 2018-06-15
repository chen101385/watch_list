import React from 'react';
import Listing from './Listing.jsx';

const ShowList = (props) => {
    return (
        props.shows.map(show => <Listing key={show._id} title={show.title} />)
    )
}

export default ShowList;