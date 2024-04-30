import React from "react";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Header;
