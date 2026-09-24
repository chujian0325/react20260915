import React, { Component } from "react";
import { NavLink, Routes, Route } from "react-router-dom";

export default class MyNavlink extends Component {
  render() {
    const { to } = this.props;

    // console.log("this.props000", this.props);
    return (
      <NavLink
        className={({ isActive }) =>
          `list-group-item ${isActive ? "activeStyle" : ""}`
        }
        to={to}
        {...this.props}
      >
        {/* {this.props.children} */}
      </NavLink>
    );
  }
}
