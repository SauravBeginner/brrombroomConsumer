import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="https://www.broomboomcabs.com/logo2.png"
        alt="myBiz Logo"
        className="h-10"
      />
    </Link>
  );
};

export default Logo;
