import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid container-max-width">
        <a href="/" className="navbar-brand">AI Community</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <a href="/" className="nav-item nav-link">Home</a>
            <a href="/about" className="nav-item nav-link">About</a>
            <a href="/blog" className="nav-item nav-link">Blog</a>
            <a href="/contact" className="nav-item nav-link">Contact Us</a>
            <a href="/projects" className="nav-item nav-link">Projects</a>
            <a href="/teams" className="nav-item nav-link">Teams</a>
            <a href="/community" className="nav-item nav-link">Community</a>
            <a href="/testimonials" className="nav-item nav-link">Testimonials</a>
          </div>
          <div className="navbar-nav ms-auto">
            <a href="/login" className="nav-item nav-link">Login</a>
            <a href="/register" className="nav-item nav-link">Register</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
