import React, { useState, useEffect } from "react";
import "./Search.scss";

const Search = props => {
  const [dropValue, setDropValue] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    props.fetch(dropValue);
  }, [dropValue]);

  return (
    <div className="searchContainer">
      <div className="searchBox">
        <input
          placeholder="Search for country..."
          value={searchValue}
          onChange={e => {
            props.search(e.target.value);
            setSearchValue(e.target.value);
            if (dropValue !== "All") {
              setDropValue("All");
            }
          }}
        />
      </div>
      <div className="dropContainer">
        <select
          id="country-drop"
          name="countries"
          className="element"
          value={dropValue}
          onChange={e => {
            setDropValue(e.target.value);
            setSearchValue("");
            console.log("reset");
          }}
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
