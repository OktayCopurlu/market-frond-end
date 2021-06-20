import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import MenuLinks from "./menuLinks";

export default function Navigation() {

  return (
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            FreeMarket
          </NavLink>
          <MenuLinks />{/* show menu Links */}
        </div>
      </nav>
  );
}
