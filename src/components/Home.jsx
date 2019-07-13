import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Container id="homeContainer">
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/IMG_7778.JPG" rounded className="profile-pic" />
                        <h3>Pizza</h3>
                        <p>For the lack of a better word I call them hangy downs. When you do it your way you can go anywhere you choose.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/IMG_7778.JPG" rounded className="profile-pic" />
                        <h3>Pizza</h3>
                        <p>For the lack of a better word I call them hangy downs. When you do it your way you can go anywhere you choose.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/IMG_7778.JPG" rounded className="profile-pic" />
                        <h3>Pizza</h3>
                        <p>For the lack of a better word I call them hangy downs. When you do it your way you can go anywhere you choose.</p>
                    </Col>
                </Row>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/IMG_7778.JPG" rounded className="profile-pic" />
                        <h3>Pizza</h3>
                        <p>For the lack of a better word I call them hangy downs. When you do it your way you can go anywhere you choose.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/IMG_7778.JPG" rounded className="profile-pic" />
                        <h3>Pizza</h3>
                        <p>For the lack of a better word I call them hangy downs. When you do it your way you can go anywhere you choose.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/IMG_7778.JPG" rounded className="profile-pic" />
                        <h3>Pizza</h3>
                        <p>For the lack of a better word I call them hangy downs. When you do it your way you can go anywhere you choose.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}