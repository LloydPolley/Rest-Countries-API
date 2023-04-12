import React, { useState, useEffect, useRef } from "react";
import Search from "../../components/Search/Search";
import {
  regionFetch,
  fetchAll,
  fetchCountry,
  fetchHandler,
} from "../../data/rest";
import CountryWidget from "../../components/CountryWidget/CountryWidget";
import Loading from "../../components/Loading/Loading";
import { useQuery } from "react-query";

const Home = () => {
  const [queryValue, setQueryValue] = useState("");
  const [fetchType, setFetchType] = useState("fetchCountries");

  const { data, status } = useQuery([fetchType, queryValue], fetchHandler);

  return (
    <div className="home-container">
      <Search
        setQueryValue={setQueryValue}
        setFetchType={setFetchType}
        queryValue={queryValue}
      />
      <div className="countries">
        {status === "loading" ? (
          <Loading />
        ) : data?.status === 404 ? (
          <div>No matches</div>
        ) : (
          data?.map((country) => (
            <CountryWidget key={country?.name?.common} data={country} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
