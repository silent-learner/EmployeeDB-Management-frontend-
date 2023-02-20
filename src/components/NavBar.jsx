import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../favicon.png";

const NavBar = ({ location }) => {
  const [isOpen, setisOpen] = useState(false);
  const handleOnCLick = () => {
    setisOpen(!isOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        <img src={icon} height="40px" width="40px" alt="icon" />
        Employee DB Management
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={isOpen ? true : false} aria-label="Toggle navigation" onClick={handleOnCLick}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${!isOpen ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" onClick={handleOnCLick}>
            <Link
              className={`nav-link ${location === "/" ? "text-white" : ""}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item" onClick={handleOnCLick}>
            <Link
              className={`nav-link ${
                location === "/create" ? "text-white" : ""
              }`}
              to="/create"
            >
              Add Employees
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
