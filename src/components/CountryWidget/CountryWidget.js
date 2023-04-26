import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { formatNumber } from "../../data/rest";

import style from "./CountryWidget.module.scss";

const cx = classNames.bind(style);

const CountryWidget = ({ data }) => {
  const { name, flags, population, region, capital } = data;
  const { common } = name;

  return (
    <div
      data-testid="country-widget"
      key={common}
      className={cx("country", "element")}
    >
      <Link data-testid="country-link" to={`/${common}`}>
        <div
          className={cx("country__image")}
          style={{ backgroundImage: `url("${flags.svg}")` }}
        ></div>
      </Link>

      <div className={cx("country__data")}>
        <Link to={`/view?location=${common}`}>
          <h2 className="underline-swipe">{common}</h2>
        </Link>
        <p>
          Population: <span>{formatNumber(population)}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryWidget;
