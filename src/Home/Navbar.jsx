import React, { useState } from 'react';

const Navbar = () => {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);

  const toggleNavbar = () => {
    setNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)" }}>
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
              <a className="nav-link" href="/notes">
                Notes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/question-papers">
                Question Papers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/syllabus">
                Syllabus
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
