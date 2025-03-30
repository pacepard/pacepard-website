import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GetStartedButton from '../common/GetStartedButton';
import './Navbar.css';
import PacepardLogo from '../../assets/pacepard-logo.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-container">
          <img src={PacepardLogo} alt="Pacepard Logo" className="navbar-logo" />
        </Link>

        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/api-devtools" className="nav-link">API & Devtools</Link>
          <Link to="/rewards" className="nav-link">Rewards</Link>
          <Link to="/use-cases" className="nav-link">Use Cases</Link>
          <div className="desktop-only">
            <GetStartedButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;