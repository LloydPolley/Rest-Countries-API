import React, { useState, useEffect } from "react";

import Search from "../../components/Search/Search";

import { regionFetch, fetchAll, searchFetch } from "../../data/rest";

import CountryWidget from "../../components/CountryWidget/CountryWidget";

const Home = () => {
  //Loaded countries
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetchAllCountries();
  }, []);

  //Init load
  const fetchAllCountries = () => {
    fetchAll()
      .then(data => {
        return data;
      })
      .then(data => {
        setCountries(data);
      });
  };
  //Runs on search
  const searchFunction = input => {
    const searchedFound = searchFetch(input)
      .then(data => {
        return data;
      })
      .then(data => {
        setCountries(data);
      });
  };
  //Runs on region select
  const regionSelect = region => {
    setCountries(
      regionFetch(region)
        .then(data => {
          return data;
        })
        .then(data => {
          setCountries(data);
        })
    );
  };

  // const pagination = () => {
  //   if (countries.length > 10) {
  //     let page = countries.slice(pageNumber - 10, pageNumber);
  //     setNextPage(nextPage.concat(page));
  //     setPageNumber(pageNumber + 10);
  //   }else{
  //     setNextPage(countries);
  //   }
  // };

  return (
    <div className="homeContainer">
      <Search search={searchFunction} reset={fetchAllCountries} fetch={regionSelect}/>
      <div className="countryWidgetContainer">
        {!Array.isArray(countries) ? (
          <h3>Loading</h3>
        ) : (
          countries.map(country => {
            return <CountryWidget key={country.name} data={country} />;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
