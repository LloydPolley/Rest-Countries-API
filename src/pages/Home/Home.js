import React, { useState, useEffect, useRef } from "react";
import Search from "../../components/Search/Search";
import { fetchHandler } from "../../data/rest";
import CountryList from "../../components/CountryList/CountryList";

import { useQuery } from "react-query";
import "./Home.scss";

const Home = () => {
  const [queryValue, setQueryValue] = useState("");
  const [fetchType, setFetchType] = useState("fetchCountries");
  const [amount, setAmount] = useState(7);

  const { data, status } = useQuery([fetchType, queryValue], fetchHandler);

  const increaseAmount = () => {
    setAmount(amount + 8);
  };

  useEffect(() => {
    setAmount(7);
  }, [queryValue]);

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
