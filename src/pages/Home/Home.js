import React, { useState, useEffect, useRef } from "react";
import Search from "../../components/Search/Search";
import { regionFetch, fetchAll, searchFetch } from "../../data/rest";
import CountryWidget from "../../components/CountryWidget/CountryWidget";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  //Loaded countries
  const [countries, setCountries] = useState([]);
  const [pagCountries, setPagCountries] = useState([]);

  const loadMoreRef = useRef(null);

  const [pageNo, setPageNo] = useState(12);

  useEffect(() => {
    // window.addEventListener('scroll', ()=>{
    //   console.log(loadMoreRef.current.getBoundingClientRect().y, window.innerHeight)
    //   if(loadMoreRef.current.getBoundingClientRect().y < window.innerHeight){
    //     s
    //     loadMore();
    //     // console.log('run')
    //   }
    // })
    fetchAllCountries();
    paginationInit();
  }, []);

  useEffect(() => {
    setPageNo(12);
    setPagCountries([]);
    paginationInit();
  }, [countries]);

  //Init load
  const fetchAllCountries = () => {
    fetchAll()
      .then((data) => {
        return data;
      })
      .then((data) => {
        setCountries(data);
      });
  };
  //Runs on search
  const searchFunction = (input) => {
    const searchedFound = searchFetch(input)
      .then((data) => {
        return data;
      })
      .then((data) => {
        setCountries(data);
      });
  };
  //Runs on region select
  const regionSelect = (region) => {
    setCountries(
      regionFetch(region)
        .then((data) => {
          return data;
        })
        .then((data) => {
          setCountries(data);
        })
    );
  };

  const paginationInit = () => {
    if (countries.length > 12) {
      let page = countries.slice(0, 12);
      setPagCountries(page);
    } else {
      setPagCountries(countries);
    }
  };

  const loadMore = () => {
    //increase pageNo by 12
    setPageNo(pageNo + 12);
    //Add ten to pagCountries
    setPagCountries(pagCountries.concat(countries.splice(pageNo, pageNo + 12)));
    // console.log(pagCountries, 'run');
  };

  return (
    <div className="homeContainer">
      {/* <Search
        search={searchFunction}
        reset={fetchAllCountries}
        fetch={regionSelect}
      /> */}
      <div className="countryWidgetContainer">
        {/* {!Array.isArray(pagCountries) ? (
          <Loading />
        ) : (
          pagCountries.map((country) => {
            return <CountryWidget key={country.name} data={country} />;
          })
        )} */}
      </div>
      {/* <div className="loadMore">
        <p className="loadMore__button" onClick={loadMore} ref={loadMoreRef}>
          Load more
        </p>
      </div> */}
    </div>
  );
};

export default Home;
