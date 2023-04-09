import React from "react";
import style from "./Header.scss";
import { toggleMode } from "../../mode/mode";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const Header = () => {
  return (
    <div className="header-container element">
      <div className="header">
        <Link className="header__home" to={"/"}>
          Where in the world?
        </Link>
        <div className="header__mode" onClick={toggleMode}>
          <MdDarkMode />
        </div>
      </div>
    </div>
  );
};

export default Header;
