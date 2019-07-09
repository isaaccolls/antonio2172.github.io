import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavBar.css';

export default class CustomNavBar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Brand>
                    <Link to="/">CoderLife</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link eventKey={1} href="/" to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/about" to="/about">
                            About
                        </Nav.Link>
                        <Nav.Link eventKey={3} href="/news" to="/news">
                            News
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

// <Nav.Link eventKey={3} componentClass={Link} href="/news" to="/news"> solve it