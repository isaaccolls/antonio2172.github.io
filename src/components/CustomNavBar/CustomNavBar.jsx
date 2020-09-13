import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavBar.css';

const CustomNavBar = () => (
  <Navbar collapseOnSelect expand="md" className="navbar-custom">
    <Navbar.Brand className="ml-5">I C</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse>
      <Nav className="mx-auto" defaultActiveKey={1}>
        <Nav.Item>
          <Nav.Link eventKey={1} as={Link} to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="ml-3">
          <Nav.Link eventKey={2} as={Link} to="/about">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="ml-3">
          <Nav.Link eventKey={3} as={Link} to="/portfolio">
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="ml-3">
          <Nav.Link eventKey={4} as={Link} to="/blog">
            Blog
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="ml-3">
          <Nav.Link eventKey={5} as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default CustomNavBar;
