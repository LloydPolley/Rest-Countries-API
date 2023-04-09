import React, { useState, useEffect, useRef } from "react";
import Search from "../../components/Search/Search";
import { regionFetch, fetchAll, fetchCountry } from "../../data/rest";
import CountryWidget from "../../components/CountryWidget/CountryWidget";
import Loading from "../../components/Loading/Loading";
import { useQuery } from "react-query";

const Home = () => {
  //Loaded countries
  const [countries, setCountries] = useState([]);
  const [pagCountries, setPagCountries] = useState([]);
  const loadMoreRef = useRef(null);
  const [pageNo, setPageNo] = useState(12);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setPageNo(12);
    // setPagCountries([]);
    // paginationInit();
  }, [countries]);

  const { data, status } = useQuery(
    [`searchCounty`, searchValue],
    fetchCountry
  );

  // const paginationInit = () => {
  //   if (countries.length > 12) {
  //     let page = countries.slice(0, 12);
  //     setPagCountries(page);
  //   } else {
  //     setPagCountries(countries);
  //   }
  // };

  // const loadMore = () => {
  //   //increase pageNo by 12
  //   setPageNo(pageNo + 12);
  //   //Add ten to pagCountries
  //   setPagCountries(pagCountries.concat(countries.splice(pageNo, pageNo + 12)));
  //   // console.log(pagCountries, 'run');
  // };

  return (
    <div className="home-container">
      <Search
        // refetch={refetch}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <div className="countries">
        {!data ? (
          <Loading />
        ) : (
          data?.map((country) => (
            <CountryWidget key={country?.name?.common} data={country} />
          ))
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
