import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";

import { borderFetch, formatNumber, fetchHandler } from "../../data/rest";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import style from "./Country.module.scss";
import Search from "../../components/Search/Search";
import { IoArrowBackOutline } from "react-icons/io5";
import Loading from "../../components/Loading/Loading";

const cx = classNames.bind(style);

const Country = (props) => {
  const { data, status } = useQuery(
    ["fetchCountries", props.match.params.id],
    fetchHandler
  );

  if (status === "loading") {
    return <Loading />;
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

  console.log("test", Object.values(languages)[0]);

  return (
    <div className={cx("country-container")}>
      <div className={cx("country-back")}>
        <Link to="/">
          <IoArrowBackOutline />
        </Link>
      </div>
      <div className={cx("country")}>
        <div className={cx("country-hero")}>
          <div className={cx("country-image")}>
            <img src={flags.svg} />
          </div>
        </div>
        <div className={cx("country-data")}>
          <h1>{official}</h1>
          <div className={cx("country-boxes")}>
            <div className={cx("box")}>
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
            <div className={cx("box")}>
              <p>
                Top Level Domain: <span>{tld}</span>
              </p>
              <p>
                Currency: <span>{Object.values(currencies)[0]?.name}</span>
              </p>
              <p>
                Language: <span>{Object.values(languages)[0]}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
