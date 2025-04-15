import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img src="/path-to-logo.png" alt="Logo" className="logo" />
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/studio">Studio</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      
      {/* Offcanvas Button */}
      <button className="circle-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <span className="three-dots"><span></span><span></span><span></span></span>
      </button>

      {/* Offcanvas Component */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          Content here...
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
