import React, { useState, useEffect } from "react";
import "./Country.scss";

import { borderFetch, formatNumber, fetchCountry } from "../../data/rest";
import { Link } from "react-router-dom";

const Country = props => {
  // const data = props.location.state;
  const [countryData, setCountryData] = useState("");
  const [borderState, setBorderState] = useState([]);

  console.log(props.match, 'props match')
    console.log(window.location.href)

  useEffect(() => {
    loadCountryData(props.match.params.id);
    
  }, [props.match.params.id]);

  //Init load
  const loadCountryData = input => {
    fetchCountry(input)
      .then(data => {
        return data;
      })
      .then(data => {
        setCountryData(data[0]);
        return data[0];
      })
      .then(data => {
        borderFetch(data.borders).then(data => {
          setBorderState(data);
        });
      });
  };

  const renderPage = () => (
    <div className="countryContainer">
      <div className="countryContainer__image">
        <img src={countryData.flag} />
      </div>
      <div className="countryContainer__right">
        <div className="countryContainer__data">
          <h1>{countryData.name}</h1>

          <div className="top">
            <div className="top__left">
              <p>
                Native Name: <span>{countryData.nativeName}</span>
              </p>
              <p>
                Population: <span>{formatNumber(countryData.population)}</span>
              </p>
              <p>
                Region: <span>{countryData.region}</span>
              </p>
              <p>
                Sub Region: <span>{countryData.subregion}</span>
              </p>
              <p>
                Capital: <span>{countryData.capital}</span>
              </p>
            </div>
            <div className="top__right">
              <p>
                Top Level Domain: <span>{countryData.topLevelDomain}</span>
              </p>
              <p>
                Currencies: <span>{countryData.currencies[0].name}</span>
              </p>
              <p>
                Languages: <span>{countryData.languages[0].nativeName}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="countryContainer__border">
          <h3>Border Countries</h3>
          <div className="borderCountries">
            {borderState === undefined ? (
              <p>No borders</p>
            ) : (
              borderState.map(border => {
                return (
                  <Link
                    key={border.name}
                    onClick={() => {
                      setBorderState([]);
                    }}
                    to={{
                      pathname: `/country/${border.name}`,
                      state: border
                    }}
                  >
                    <p className="borderButton element">{border.name}</p>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="countryPage">
      <div className="goBackContainer">
        <Link to="/">
          <p className="element">Go back</p>
        </Link>
      </div>
      {countryData === "" ? <h2>Loading</h2> : renderPage()}
    </div>
  );
};

export default Country;
