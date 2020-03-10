import React, { useState, useEffect } from "react";

import Search from "../../components/Search/Search";
import DropDown from "../../components/DropDown/DropDown";

import { regionFetch, fetchAll, searchFetch } from "../../data/rest";

import CountryWidget from "../../components/CountryWidget/CountryWidget";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [countries, setCountries] = useState(0);

  useEffect(() => {
    fetchAllCountries();
  }, []);

  const fetchAllCountries = () => {
    fetchAll()
      .then(data => {
        return data;
      })
      .then(data => {
        setCountries(data);
        setLoaded(true);
      });
  };

  const searchFunction = (input) => {
    setLoaded(false);
    setCountries(
      searchFetch(input).then(data => {
        return data;
      }).then((data)=>{
        // console.log(data, 'search');
        // setCountries(data);
        // setLoaded(true);
      })
    );
  }

  const regionSelect = region => {
    setLoaded(false);
    setCountries(
      regionFetch(region).then(data => {
        return data;
      }).then((data)=>{
        setCountries(data);
        setLoaded(true);
      })
    );
  };

  return (
    <div className="homeContainer">
      <Search search={searchFunction}/>
      <DropDown fetch={regionSelect} />
      {/* {console.log(countries)} */}
      {!loaded ? (
        <h3>LOading</h3>
      ) : (
        countries.map(country => {
          return <CountryWidget data={country}/>
        })
      )}
    </div>
  );
};

export default Home;
