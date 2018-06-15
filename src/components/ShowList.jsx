import React from 'react';
import Listing from './Listing.jsx';

const ShowList = (props) => {
    if (props.displayShows) {
      return props.shows.map(show => (
        <Listing
          key={show._id}
          title={show.title}
          mediaLookup={props.showLookup}
        />
      ));
    } else {
      return ("")
    }
}

export default ShowList;