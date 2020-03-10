import React from "react";
import './Header.scss';
import {toggleMode} from '../../mode/mode';


const Header = () => {
  return (
    <div className="headerContainer element">
      <div className="header">
        <p>Where in the world?</p>
        <p onClick={toggleMode}>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
