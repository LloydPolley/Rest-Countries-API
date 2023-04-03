import React, { useState, useEffect, useRef } from "react";
import Search from "../../components/Search/Search";
import { regionFetch, fetchAll, searchFetch } from "../../data/rest";
import CountryWidget from "../../components/CountryWidget/CountryWidget";
import Loading from "../../components/Loading/Loading";
import { useQuery } from "react-query";

const Home = () => {
  //Loaded countries
  const [countries, setCountries] = useState([]);
  const [pagCountries, setPagCountries] = useState([]);
  const loadMoreRef = useRef(null);
  const [pageNo, setPageNo] = useState(12);

  useEffect(() => {
    setPageNo(12);
    setPagCountries([]);
    paginationInit();
  }, [countries]);

  const { data, status } = useQuery("fixtures", fetchAll);

  if (data) {
    console.log("data", data[0]);
  }

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
    <div className="home-container">
      {/* <Search
        search={searchFunction}
        reset={fetchAllCountries}
        fetch={regionSelect}
      /> */}
      <div className="countries">
        {!data ? (
          <Loading />
        ) : (
          data?.map((country) => {
            return <CountryWidget key={country?.name?.common} data={country} />;
          })
        )}
      </div>
      {/* <div className="load-more">
        <p className="load-more__button" onClick={loadMore} ref={loadMoreRef}>
          Load more
        </p>
      </div> */}
    </div>
  );
};

export default Home;
