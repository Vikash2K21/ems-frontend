import React from "react";
import { Link } from "react-router-dom";

function HeaderComponent() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">

                {/* Brand Title */}
                <Link className="navbar-brand fw-bold" to="/employees">
                    EMSTRACKER
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu Items */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/employees">
                                Employees
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/add-employee">
                                Add Employee
                            </Link>
                        </li>

                    </ul>
                </div>

            </nav>
        </header>
    );
}

export default HeaderComponent;
