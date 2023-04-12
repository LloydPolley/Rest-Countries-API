import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { regionFetch, formatNumber } from "../../data/rest";
import { useInView } from "react-intersection-observer";

import { Link } from "react-router-dom";

import style from "./CountryWidget.module.scss";

const cx = classNames.bind(style);

const CountryWidget = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      key={data.name.common}
      className={cx("country", "element", inView && "scroll-in")}
      ref={ref}
    >
      <Link to={`/${data.name.common}`}>
        <div
          className={cx("country__image")}
          style={{ backgroundImage: `url("${data.flags.png}")` }}
        ></div>
      </Link>

      <div className={cx("country__data")}>
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
