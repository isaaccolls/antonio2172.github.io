import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Scroll from './CustomScroll';
import './CustomNavBar.css';

export default class CustomNavBar extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    
    handleSelect(eventKey) {
        // console.log(`selected: ${eventKey}`);
    }

    handleClick() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    }



    render() {
        return (
            <Navbar default collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top" onSelect={k => this.handleSelect(k)}>
                <Scroll scrollStepInPx="50" delayInMs="300.66">
                    <Navbar.Brand className="ml-5"
                    onClick={this.handleClick}
                    >
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