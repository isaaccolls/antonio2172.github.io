import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to my life</h2>
                    <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
                    <Link to="/about">
                        <Button>About</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/xd_304.JPG" rounded className="profile-pic" />
                        <h3>Pizza</h3>
                        <p>For the lack of a better word I call them hangy downs. When you do it your way you can go anywhere you choose.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/xd_304.JPG" rounded className="profile-pic" />
                        <h3>Pizza</h3>
                        <p>For the lack of a better word I call them hangy downs. When you do it your way you can go anywhere you choose.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/xd_304.JPG" rounded className="profile-pic" />
                        <h3>Pizza</h3>
                        <p>For the lack of a better word I call them hangy downs. When you do it your way you can go anywhere you choose.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
