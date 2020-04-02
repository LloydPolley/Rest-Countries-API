import React, { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import { regionFetch, fetchAll, searchFetch } from "../../data/rest";
import CountryWidget from "../../components/CountryWidget/CountryWidget";
import Loading from '../../components/Loading/Loading';

const Home = () => {
  //Loaded countries
  const [countries, setCountries] = useState([]);
  const [pagCountries, setPagCountries] = useState([]);


  const [pageNo, setPageNo] = useState(10);

  useEffect(() => {
    fetchAllCountries();
    paginationInit();
  }, []);

  useEffect(()=>{
    setPageNo(10);
    setPagCountries([]);
    paginationInit();
    console.log('new search reset');
  }, [countries])

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

  const paginationInit = () => {
    if (countries.length > 10) {
      let page = countries.slice(0, 10);
      setPagCountries(page);
    }else{
      setPagCountries(countries);
    }
  };

  const loadMore = () => {
    //increase pageNo by 10
    setPageNo(pageNo + 10);
    //Add ten to pagCountries
    setPagCountries(pagCountries.concat(countries.splice(pageNo, pageNo+10)))
    console.log(pagCountries);
  }

  return (
    <div className="homeContainer">
      <Search
        search={searchFunction}
        reset={fetchAllCountries}
        fetch={regionSelect}
      />
      <div className="countryWidgetContainer">
        {!Array.isArray(pagCountries) ? (
          <Loading/>
        ) : (
          pagCountries.map(country => {
            return <CountryWidget key={country.name} data={country}/>;
          })
        )}
      </div>
                <button onClick={loadMore}>Load more</button>

    </div>
  );
};

export default Home;
