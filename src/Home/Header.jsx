import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-light py-2">
      <div className="container text-center">
        <Link to="/">
          <img
            src="https://www.freepnglogos.com/uploads/logo-bca-png/bank-central-asia-logo-bank-central-asia-bca-format-cdr-png-gudril-1.png"
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
