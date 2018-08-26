import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  getBadge() {
    let clases = "badge m-2 badge-";
    clases += this.props.totalCounter === 0 ? "warning" : "primary";
    return clases;
  }
  render() {
    return (
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="" className="navbar-brand d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <strong>
              Shoping List
              <span
                className={this.getBadge()}
                style={{
                  margin: 50,
                  padding: 8,
                  fontSize: 15,
                  fontWeight: "bold",
                  height: 38,
                  paddingTop: 10
                }}
              >
                {this.props.totalCounter}
              </span>
            </strong>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </div>
    );
  }
}

export default NavBar;
