import React from 'react';
import { Link } from 'react-router-dom';
import logi from '../assets/logi.png'

const Header = () => {
  return (
    <header className="bg-light">
      <div className="container text-center">
        <Link to="/">
          <img
            src={logi}
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
