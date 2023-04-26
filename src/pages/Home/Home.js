import React, { useState, useEffect, useRef } from "react";
import Search from "../../components/Search/Search";
import { fetchHandler } from "../../data/rest";
import CountryList from "../../components/CountryList/CountryList";

import { useQuery } from "react-query";
import "./Home.scss";

const Home = (props) => {
  console.log("props", props);
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
      <CountryList data={data} status={status} />
    </div>
  );
};

export default Home;
