import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function Navigator() {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <NavLink to="/" className="navbar-brand">
                Navigate
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      to="/"
                      className="nav-link"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      to="/service"
                      className="nav-link"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      to="/about"
                      className="nav-link"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      to="/contact"
                      className="nav-link"
                    >
                      Contact us
                    </NavLink>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control mr-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-info" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigator;
