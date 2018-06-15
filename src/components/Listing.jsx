import React from "react";

const Listing = props => {
  return (
    <div className="List-spacing">
      <li>
        <a
          className="list-group-item"
          onClick={() => props.mediaLookup(props.title)}
        >
          {props.title}
        </a>
      </li>
    </div>
  );
};

export default Listing;
