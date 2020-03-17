import React, { useState, useEffect } from "react";
import "./Country.scss";

import { borderFetch } from "../../data/rest";
import { Link } from "react-router-dom";

const Country = props => {
  const data = props.location.state;
  const [borderState, setBorderState] = useState([]);

  useEffect(() => {
    let bordersF = fetchBorder();
  }, [data]);

  const fetchBorder = () => {
    borderFetch(data.borders).then(data => {
      setBorderState(data);
    });
  };

  return (
    <div className="countryPage">
      <div className="goBackContainer">
        <Link to="/">
          <p className="element">Go back</p>
        </Link>
      </div>
      <div className="countryContainer">
        <div className="countryContainer__image">
          <img src={data.flag} />
        </div>
        <div className="countryContainer__right">
          <div className="countryContainer__data">
            <div>
              <h1>{data.name}</h1>
            </div>
            <div>
              <p>
                Native Name: <span>{data.nativeName}</span>
              </p>
              <p>
                Population: <span>{data.population}</span>
              </p>
              <p>
                Region: <span>{data.region}</span>
              </p>
              <p>
                Sub Region: <span>{data.subregion}</span>
              </p>
              <p>
                Capital: <span>{data.capital}</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain: <span>{data.topLevelDomain}</span>
              </p>
              <p>
                Currencies: <span>{data.currencies[0].name}</span>
              </p>
              <p>
                Languages: <span>{data.languages[0].nativeName}</span>
              </p>
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
    </div>
  );
};

export default Country;
