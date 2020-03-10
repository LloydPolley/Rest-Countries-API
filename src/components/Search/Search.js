import React from "react";
import "./Search.scss";

const Search = props => {
  return (
    <div className="searchContainer">
      <input
        placeholder="Search for country..."
        onChange={e => {
          if (!(e.target.value === "")) {
            props.search(e.target.value);
          }
        }}
      />
    </div>
  );
};

export default Search;
