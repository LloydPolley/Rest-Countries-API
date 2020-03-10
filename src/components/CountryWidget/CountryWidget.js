import React, { useState } from "react";
import { regionFetch, fetchAll } from "../../data/rest";

import "./CountryWidget.scss";

const CountryWidget = ({ data }) => {
  return (
    <div key={data.name} className="countryWidgetContainer element">
      <div className="countryWidget">
        <img src={data.flag} />
        <div className="countryWidget__data">
          <h2>{data.name}</h2>
          <p>
            Population: <span>{data.population}</span>
          </p>
          <p>
            Region: <span>{data.region}</span>
          </p>
          <p>
            Capital: <span>{data.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryWidget;
