import React, { useState, useEffect } from "react";
import "./DropDown.scss";

const DropDown = props => {
  return (
    <div className="dropContainer">
      <select
        id="country-drop"
        name="countries"
        className="element"
        onChange={e => {
          props.fetch(e.target.value);
        }}
      >
        <option value="Filter by Region" >Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default DropDown;
