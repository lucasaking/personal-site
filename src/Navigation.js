import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="Navigation">
      <nav>
        <NavLink exact to="/about">About</NavLink>
        <NavLink exact to="/contact">Contact</NavLink>
        <NavLink exact to="/portfolio">Portfolio</NavLink>
        <NavLink exact to="/development">Development</NavLink>
      </nav>
    </div>
  )
}

export default Navigation;
