import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"; // Import the logo image

const Logo = ({ className }) => {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="Logo"
        width="150"  // Set desired width
        height="150" // Set desired height
        className={`relative pr-3 ${className}`}
      />
    </Link>
  );
};

export default Logo;
