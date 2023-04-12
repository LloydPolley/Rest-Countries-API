import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";

import { borderFetch, formatNumber, fetchHandler } from "../../data/rest";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import style from "./Country.module.scss";
import Search from "../../components/Search/Search";

const cx = classNames.bind(style);

const Country = (props) => {
  const { data, status } = useQuery(
    ["fetchCountries", props.match.params.id],
    fetchHandler
  );

  if (!data) {
    return null;
  }

  const {
    name: { official },
    population,
    region,
    subregion,
    capital,
    tld,
    flags,
    currencies,
    languages,
  } = data[0];

  console.log(flags);
  console.log(languages);

  return (
    <div className={cx("country-container")}>
      <div
        className={cx("country-background")}
        style={{
          backgroundImage: `url("${flags.svg}")`,
        }}
      >
        <div className={cx("country-overlay")} />
      </div>
      <Search />
      <div className={cx("country")}>
        <div className="country-container__data">
          <h1>{official}</h1>
          <div className="top">
            <div className="top__left">
              <p>
                Native Name: <span>{official}</span>
              </p>
              <p>
                Population: <span>{formatNumber(population)}</span>
              </p>
              <p>
                Region: <span>{region}</span>
              </p>
              <p>
                Sub Region: <span>{subregion}</span>
              </p>
              <p>
                Capital: <span>{capital}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;

{
  /* <div className="country-container__image">
        <img src={flags.png} />
      </div> */
}
