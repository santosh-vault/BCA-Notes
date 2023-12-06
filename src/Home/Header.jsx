import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <header className="bg-light">
      <div className="container text-center">
        <Link to="/">
          <img
            src={logo}
            alt="Study Theme Logo"
            className="img-fluid"
            style={{ maxWidth: "100px" }}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
