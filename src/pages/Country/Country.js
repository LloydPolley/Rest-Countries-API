import React, { useState, useEffect } from "react";
import "./Country.scss";

import { borderFetch, formatNumber, fetchCountry } from "../../data/rest";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const Country = (props) => {
  // const data = props.location.state;
  const [countryData, setCountryData] = useState("");
  const [borderState, setBorderState] = useState([]);
  console.log("props", props);
  if (false) {
  }
  const { data, status } = useQuery(
    `fetchCountry${props.match.params.id.toLowerCase()}`,
    () => fetchCountry(props.match.params.id.toLowerCase())
  );

  //Init load
  // const loadCountryData = (input) => {
  //   fetchCountry(input)
  //     .then((data) => {
  //       return data;
  //     })
  //     .then((data) => {
  //       setCountryData(data[0]);
  //       return data[0];
  //     })
  //     .then((data) => {
  //       borderFetch(data.borders).then((data) => {
  //         setBorderState(data);
  //       });
  //     });
  // };
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
  } = data;

  console.log(data);

  const renderPage = () => (
    <>
      <div className="country-container">
        <Link className="back" to="/">
          <p className="element">Back</p>
        </Link>
        <div className="country-container__image">
          <img src={flags.png} />
        </div>
        <div className="country-container__right">
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
              <div className="top__right">
                <p>{/* Top Level Domain: <span>{tld}</span> */}</p>
                {/* <p>
                Currencies: <span>{countryData.currencies[0].name}</span>
              </p>
              <p>
                Languages: <span>{countryData.languages[0].nativeName}</span>
              </p> */}
              </div>
            </div>
          </div>
          {/* <div className="country-container__border">
          <h3>Border Countries</h3>
          <div className="border-countries">
            {borderState === undefined ? (
              <p>No borders</p>
            ) : (
              borderState.map((border) => {
                return (
                  <div className="borderItems" key={border.name}>
                    <Link
                      onClick={() => {
                        setBorderState([]);
                        // console.log(border.name, 'click')
                      }}
                      to={{
                        pathname: `/${border.name}`,
                        state: border,
                      }}
                    >
                      <p className="borderButton element">{border.name}</p>
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div> */}
        </div>
      </div>
    </>
  );

  return (
    <div className="country-page">
      {!data ? <h2>Loading</h2> : renderPage()}
    </div>
  );
};

export default Country;
