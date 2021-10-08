import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import MenuLinks from "./menuLinks";
import logo from "../../logo.png"
export default function Navigation() {

  return (
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/">
            <img className="nav-logo" src={logo} alt="no logo" />
          </NavLink>
          <MenuLinks />{/* show menu Links */}
        </div>
      </nav>
  );
}
