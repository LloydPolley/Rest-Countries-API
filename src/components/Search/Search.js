import React, { useState, useEffect } from "react";
import "./Search.scss";

const Search = ({ refetch, setSearchValue, searchValue }) => {
  const [dropValue, setDropValue] = useState("All");
  const [enterValue, setEnterValue] = useState("");

  // useEffect(() => {
  //   props.fetch(dropValue);
  // }, [dropValue]);

  return (
    <div className="searchContainer">
      <div className="searchBox">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submit");
            setSearchValue(enterValue);
            console.log(e.target.value);
            // refetch(searchValue);
          }}
        >
          <input
            placeholder="Search for country..."
            // value={searchValue}
            onChange={(e) => {
              console.log("e", e.target.value);
              setEnterValue(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="dropContainer">
        <select
          id="country-drop"
          name="countries"
          className="element"
          value={dropValue}
          onChange={(e) => {
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
