import React, { Component, Fragment } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 justify-content-between">
        <div className="nav-wrapper">
          <Fragment>
            <a className="navbar-brand float-left" href='/'>
              Home
          </a>
          </Fragment>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {/* <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                Home
                </a>
              </li>
            </ul> */}

          </div>
        </div>
            <ul className="navbar-nav d-flex justify-content-end">
              <li className="nav-item">
                <a className="nav-link" href="/Register">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Login">
                  Login
                </a>
              </li>
            </ul>
      </nav>
    );
  }
}
