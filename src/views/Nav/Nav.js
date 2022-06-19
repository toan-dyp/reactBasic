import React from "react";
import { Link, NavLink } from "react-router-dom";

import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink activeclassName='active' to="/" exact={true}>Home</NavLink>
        <NavLink activeclassName='active' to="/todo">Todos</NavLink>
        <NavLink activeclassName='active' to="/about">About</NavLink>
      </div>
    )
  }
}

export default Nav;