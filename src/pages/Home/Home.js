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
import { AiOutlinePlusCircle } from "react-icons/ai";

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

  console.log("amount", data, amount, data?.length >= amount);

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
          data?.slice(0, amount)?.map((country, index) => {
            console.log("index", index);
            return <CountryWidget key={country?.name?.common} data={country} />;
          })
        )}
        {data?.length >= amount && (
          <div className="amount" onClick={increaseAmount}>
            <AiOutlinePlusCircle />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
