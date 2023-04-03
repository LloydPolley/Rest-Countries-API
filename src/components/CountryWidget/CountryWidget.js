import React, { useState } from "react";
import { regionFetch, fetchAll, formatNumber } from "../../data/rest";

import { Link } from "react-router-dom";

import "./CountryWidget.scss";

const CountryWidget = ({ data }) => {
  console.log(data, "data");
  return (
    <div key={data.name.common} className="country element">
      <div
        className="country__image"
        style={{ backgroundImage: `url("${data.flags.png}")` }}
      >
        {/* <Link to={`/${data.name.common}`}>
          <img src={data.flags.png} />
        </Link> */}
        {/* <Link to={{ pathname: `/country/${data.name}`, state: data }}>
          <img src={data.flag} />
        </Link> */}
      </div>
      <div className="country__data">
        <Link to={`/${data.name.common}`}>
          <h2 className="underline-swipe">{data.name.common}</h2>
        </Link>
        <p>
          Population: <span>{formatNumber(data.population)}</span>
        </p>
        <p>
          Region: <span>{data.region}</span>
        </p>
        <p>
          Capital: <span>{data?.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryWidget;
