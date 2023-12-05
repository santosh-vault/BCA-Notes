import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);

  const toggleNavbar = () => {
    setNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light " style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)" }}>
      <div className="container text-center">

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            
          <li className="nav-item">
              <Link to="/notepage" className="nav-link">
                Notes
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/question-papers" className="nav-link">
                Question Papers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/syllabus" className="nav-link">
                Syllabus
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
