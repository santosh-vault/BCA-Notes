import React from 'react';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light " style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)" }}>
            <div className="container text-center">

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarNav">
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
