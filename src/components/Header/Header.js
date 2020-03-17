import React from "react";
import "./Header.scss";
import { toggleMode } from "../../mode/mode";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="headerContainer element">
      <div className="header">
        <Link to="/">
          <p>Where in the world?</p>
        </Link>
        <p onClick={toggleMode}>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
