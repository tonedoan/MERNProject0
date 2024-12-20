import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/style.css';
import '../styles/button.css';

const Layout = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand as={Link} to="/" className="nav-brand">
            <div className="shadow"></div>
            <div className="edge"></div>
            <div className="front">
              <span>Project0</span>
            </div></Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className="nav-box">
              <div className="shadow"></div>
              <div className="edge"></div>
              <div className="front">
                <span>Home</span>
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-box">
            <div className="shadow"></div>
            <div className="edge"></div>
            <div className="front">
              <span>Contact</span>
            </div>
            </Nav.Link>
            <Nav.Link as={Link} to="/reactlogo" className="nav-box">
              <div className="shadow"></div>
              <div className="edge"></div>
              <div className="front">
                <span>React Logo</span>
              </div>
            </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;
