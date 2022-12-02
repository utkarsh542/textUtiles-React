// import { getByTitle } from '@testing-library/react'
import React from "react";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand " href="#">
          {props.Title}
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                {props.about} <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
            <input
              className="form-check-input" onClick={props.toggleMode} 
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = { Title: PropTypes.string };
