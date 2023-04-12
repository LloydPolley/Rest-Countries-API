import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import "./Search.scss";

const Search = ({ setQueryValue }) => {
  const [dropValue, setDropValue] = useState("All");
  const [enterValue, setEnterValue] = useState("");

  console.log(window.location);

  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        setQueryValue(enterValue);
      }}
    >
      {window.location.pathname !== "/" ? (
        <Link to="/">
          <button className="element">Back</button>
        </Link>
      ) : (
        <>
          <div className="search__box">
            <MdSearch className="search__icon" />
            <input
              placeholder="Search"
              onChange={(e) => {
                console.log("e", e.target.value);
                setEnterValue(e.target.value);
              }}
            />
          </div>

          <select
            id="country-drop"
            name="countries"
            className="element"
            onChange={(e) => {
              setQueryValue(e.target.value);
              setEnterValue("");
            }}
          >
            <option value="All">Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </>
      )}
    </form>
  );
};

export default Search;
