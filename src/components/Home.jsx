import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import me from '../assets/images/me.JPG'
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <Container id="homeContainer" className="h-100" fluid>
                <Row className="text-center">
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fas","check-square"]} />
                        <h1>item 1</h1>
                        <p>We start with a vision in our heart, and we put it on canvas.</p>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fab", "linux"]} />
                        <h1>item 2</h1>
                        <p>We start with a vision in our heart, and we put it on canvas.</p>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["far","smile"]} />
                        <h1>item 3</h1>
                        <p>We start with a vision in our heart, and we put it on canvas.</p>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fas", "coffee"]} />
                        <h1>item 4</h1>
                        <p>We start with a vision in our heart, and we put it on canvas.</p>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fas", "coffee"]} />
                        <h1>item 5</h1>
                        <p>We start with a vision in our heart, and we put it on canvas.</p>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fas", "coffee"]} />
                        <h1>item 6</h1>
                        <p>We start with a vision in our heart, and we put it on canvas.</p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col xs={6} className="">
                        <Image src={me} rounded className="profile-pic" />
                        <h3>Who's this guy?</h3>
                        <p>Design and implementation specialist of applications that involve hardware and software to solve problems on technological field.</p>
                    </Col>
                    <Col xs={6} className="">
                        <h3>Skills</h3>
                        <p>Intro about your skills goes here. Keep the list lean and only show your primary skillset. You can always provide a link to your Linkedin or Coderwall profile so people can get more info there.</p>
                    </Col>
                </Row>
                <Row className="show-grid text-center">
                </Row>
            </Container>
        );
    }
}