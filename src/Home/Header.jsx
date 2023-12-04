import React from 'react';

const Header = () => {
  return (
    <header className="bg-light py-2" style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)" }}>
      <div className="container text-center">
        <img
          src="https://www.freepnglogos.com/uploads/logo-bca-png/bank-central-asia-logo-bank-central-asia-bca-format-cdr-png-gudril-1.png"
          alt="Study Theme Logo"
          className="img-fluid"
          style={{ maxWidth: "100px" }}
        />
      </div>
    </header>
  );
};

export default Header;