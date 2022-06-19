import React from "react";
import { Link, NavLink } from "react-router-dom";

import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink activeclassname='active' to="/" exact={true}>Home</NavLink>
        <NavLink activeclassname='active' to="/todo">Todos</NavLink>
        <NavLink activeclassname='active' to="/about">About</NavLink>
        <NavLink activeclassname='active' to="/user">Users</NavLink>
      </div>
    )
  }
}

export default Nav;