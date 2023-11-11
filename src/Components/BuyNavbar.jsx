import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Sellform from './Sellform';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Logo />
        <Link to="/sell">Sell</Link>
      </div>

      <div className="navbar-right">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;
