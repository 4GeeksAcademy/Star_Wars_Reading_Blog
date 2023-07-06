import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <Link to="/" className="navbar-brand">
        <img
          src="https://starwars-visualguide.com/assets/img/star-wars-logo.png"
          alt="Star Wars Logo"
          className="navbar-logo"
        />
        Star Wars App
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" className="nav-link">
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
