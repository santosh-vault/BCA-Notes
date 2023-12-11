import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);
  const location = useLocation();

  const toggleNavbar = () => {
    setNavbarCollapsed(!isNavbarCollapsed);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)" }}>
      <div className="container text-center">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span
  className="navbar-toggler-icon"
  style={{
    display: 'inline-block',
    width: '15em',
    height: '1.5em',
    verticalAlign: 'middle',
    fontSize: '0.8',
    textAlign: 'center',
    backgroundImage:'none',
  }}
>
  &#124; &#124; &#124; Menu &#124; &#124; &#124;
</span>

        </button>

        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/notepage" className={`nav-link ${isActive('/notepage') ? 'active' : ''}`}>
                Notes
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/question-papers" className={`nav-link ${isActive('/question-papers') ? 'active' : ''}`}>
                Question Papers
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/syllabus" className={`nav-link ${isActive('/syllabus') ? 'active' : ''}`}>
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
