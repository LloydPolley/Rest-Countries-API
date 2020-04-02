import React, { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import { regionFetch, fetchAll, searchFetch } from "../../data/rest";
import CountryWidget from "../../components/CountryWidget/CountryWidget";
import Loading from '../../components/Loading/Loading';

const Home = () => {
  //Loaded countries
  const [countries, setCountries] = useState([]);
  const [pagCountries, setPagCountries] = useState([]);

  useEffect(() => {
    fetchAllCountries();
  }, []);

  // useEffect(()=>{
  //   pagination();
  // }, [countries])


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
  //     let page = countries.slice(0, 10);
  //     setPagCountries(page);
  //     console.log('pag', page);
  //     console.log(pagCountries)
  //     // setNextPage(nextPage.concat(page));
  //     // setPageNumber(pageNumber + 10);
  //   }else{
  //     // setNextPage(countries);
  //   }
  // };

  return (
    <div className="homeContainer">
      <Search
        search={searchFunction}
        reset={fetchAllCountries}
        fetch={regionSelect}
      />
      <div className="countryWidgetContainer">
        {!Array.isArray(countries) ? (
          <Loading/>
        ) : (
          countries.map(country => {
            return <CountryWidget key={country.name} data={country}/>;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
