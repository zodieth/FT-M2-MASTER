import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <div>
      <div className="ContainerNav">
        <div className="img">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="text">Henry - Weather App</div>
      </div>
      <div className="SearchBar">
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}

export default Nav;
