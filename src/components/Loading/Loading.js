import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="Loading">
      <h2>LOADING</h2>
      <div className="barContainer">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Loading;
