import React from "react";
import { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="m-2 p-2 navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Total : {this.props.totalTasks} tasks
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="#">
                Features
              </a>
              <a className="nav-item nav-link" href="#">
                Pricing
              </a>
              <a className="nav-item nav-link disabled" href="#">
                Disabled
              </a>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}