import React from "react";
import { Link } from "react-router-dom";
import './index.css'

const Header = () => {
  return (
    <div className="header">
      <Link className='link' to="/">
        <div className="logo">Movie App</div>
      </Link>
    </div>
  );
};

export default Header;
