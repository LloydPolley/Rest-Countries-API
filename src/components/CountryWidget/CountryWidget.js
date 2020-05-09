import React, { useState } from "react";
import { regionFetch, fetchAll, formatNumber } from "../../data/rest";

import { Link } from "react-router-dom";

import "./CountryWidget.scss";

const CountryWidget = ({ data }) => {
  console.log(data.alpha3Code, 'data')
  return (
    <div key={data.name} className="countryWidget element">
      <div className="countryWidget__image">
        <Link to={`/${data.name}`}>
          <img src={data.flag} />
        </Link>
        {/* <Link to={{ pathname: `/country/${data.name}`, state: data }}>
          <img src={data.flag} />
        </Link> */}
      </div>
      <div className="countryWidget__data">
        <Link to={`/${data.name}`}>
          <h2>{data.name}</h2>
        </Link>
        {/* <Link to={{ pathname: `/${data.name}`, state: data }}>
          <h2>{data.name}</h2>
        </Link> */}
        <p>
          Population: <span>{formatNumber(data.population)}</span>
        </p>
        <p>
          Region: <span>{data.region}</span>
        </p>
        <p>
          Capital: <span>{data.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryWidget;
