import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Scroll from './CustomScroll';
import './CustomNavBar.css';

export default class CustomNavBar extends Component {

    handleSelect(eventKey) {
        // console.log(`selected: ${eventKey}`);
    }

    render() {
        return (
            <Navbar default collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top" onSelect={k => this.handleSelect(k)}>
                <Scroll scrollStepInPx="50" delayInMs="300.66">
                    <Navbar.Brand className="ml-5">
                    I C
                    </Navbar.Brand>
                </Scroll>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mx-auto" defaultActiveKey={1}>
                        <Nav.Item className="ml-3">
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
    }
}