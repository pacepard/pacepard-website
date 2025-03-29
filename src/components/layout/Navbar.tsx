import React from 'react';
import { Navbar as BootstrapNavbar, Container, Nav, Button } from 'react-bootstrap';
import { useAuth } from '../../context/auth/AuthContext';
import PacepardLogo from '../../assets/pacepard-logo.svg';
import GetStartedButton from '../common/GetStartedButton';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <BootstrapNavbar fixed="top" className="navbar">
      <Container className="navbar-container">
        <BootstrapNavbar.Brand href="/" className="navbar-logo-container">
          <img src={PacepardLogo} alt="Pacepard Logo" className="navbar-logo" />
        </BootstrapNavbar.Brand>

        <Nav className="navbar-links">
          <Nav.Link href="/products" className="nav-link">Products</Nav.Link>
          <Nav.Link href="/pricing" className="nav-link">APIs & Devtools</Nav.Link>
          <Nav.Link href="/resources" className="nav-link">Rewards</Nav.Link>
          <Nav.Link href="/salesforce-seeker" className="nav-link">Use Cases</Nav.Link>
        </Nav>

        <Nav>
          {isAuthenticated ? (
            <>
              <Nav.Link href="/dashboard" className="nav-link">Dashboard</Nav.Link>
              <Button variant="link" onClick={logout} className="nav-link">Logout</Button>
            </>
          ) : (
            <GetStartedButton />
          )}
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;