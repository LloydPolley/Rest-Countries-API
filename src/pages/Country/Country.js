import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";

import {
  borderFetch,
  formatNumber,
  fetchHandler,
  fetchCountryCode,
} from "../../data/rest";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import style from "./Country.module.scss";
import Search from "../../components/Search/Search";
import { IoArrowBackOutline } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { ImBubbles } from "react-icons/im";
import { TbWorldWww } from "react-icons/tb";
import { FaCity } from "react-icons/fa";
import Loading from "../../components/Loading/Loading";
import CountryWidget from "../../components/CountryWidget/CountryWidget";
import CountryList from "../../components/CountryList/CountryList";

const cx = classNames.bind(style);

const Country = () => {
  const [searchParams] = useSearchParams();

  const { data: countryData, status: countryStatus } = useQuery(
    ["fetchCountries", searchParams.get("location")],
    fetchHandler
  );
  const { data, status } = useQuery(
    ["fetchCountriesCode", countryData && countryData[0].borders],
    fetchCountryCode
  );

  if (countryStatus === "loading") {
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
    continents,
  } = countryData[0];

  console.log("countrydata", countryData);

  return (
    <div className={cx("country-container")}>
      <div className={cx("country")}>
        <div
          className={cx("country-hero", "country-image")}
          style={{ backgroundImage: `url("${flags.svg}")` }}
        ></div>
        <div className={cx("country-data")}>
          <p className={cx("country-continent")}>{continents}</p>
          <h1>{official}</h1>
          <div className={cx("country-boxes")}>
            <p>
              Native Name: <span>{official}</span>
            </p>
            <p>
              <BsFillPeopleFill /> <span>{formatNumber(population)}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Sub Region: <span>{subregion}</span>
            </p>
            <p>
              <FaCity /> <span>{capital}</span>
            </p>

            <p>
              <TbWorldWww /> <span>{tld}</span>
            </p>
            <p>
              Currency:
              <span>
                {Object.values(currencies)[0]?.symbol}
                {Object.values(currencies)[0]?.name}
              </span>
            </p>
            <p>
              <ImBubbles />
              <span>{Object.values(languages)[0]}</span>
            </p>
          </div>
        </div>
      </div>
      {data && (
        <div className={cx("country__borders")}>
          <h2>Borders</h2>
          <CountryList data={data} status={status} />
        </div>
      )}
    </div>
  );
};

export default Country;

{
  /* <div className={cx("country-back")}>
<Link to="/">
  <IoArrowBackOutline />
</Link>
</div> */
}
