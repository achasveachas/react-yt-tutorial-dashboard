import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav has-shadow has-text-centered">
    <div className="container">
      <div className="nav-left">
        <Link to="/" className="nav-item">YT Tutorial Dashboard</Link>
      </div>

      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div className="nav-right nav-menu is-active is-hidden-touch">
        <Link to="/signup" className="nav-item">Sign up</Link>
        <Link to="/login" className="nav-item" >Log in</Link>
      </div>
    </div>
  </nav>
);

export default Navbar
