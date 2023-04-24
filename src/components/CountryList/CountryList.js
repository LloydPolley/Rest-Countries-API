import React, { useState, useEffect, useRef } from "react";
import Search from "../../components/Search/Search";
import {
  regionFetch,
  fetchAll,
  fetchCountry,
  fetchHandler,
} from "../../data/rest";
import CountryWidget from "../CountryWidget/CountryWidget";
import Loading from "../Loading/Loading";
import { useQuery } from "react-query";
import { AiOutlinePlusCircle } from "react-icons/ai";
import style from "./CountryList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const CountryList = ({ data, status, queryValue }) => {
  const [amount, setAmount] = useState(0);

  const increaseAmount = () => {
    setAmount(amount + 8);
  };

  useEffect(() => {
    setAmount(11);
  }, [queryValue]);

  return (
    <div className={cx("countries")}>
      {status === "loading" ? (
        <Loading />
      ) : data?.status === 404 ? (
        <div>No matches</div>
      ) : (
        data
          ?.slice(0, amount)
          ?.map((country) => (
            <CountryWidget key={country?.name?.common} data={country} />
          ))
      )}
      {data?.length >= amount && (
        <div className={cx("amount")} onClick={increaseAmount}>
          <AiOutlinePlusCircle />
        </div>
      )}
    </div>
  );
};

export default CountryList;
