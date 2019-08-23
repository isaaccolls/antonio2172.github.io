import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Courses from './Courses';
import './About.css';

class About extends Component {

    render() {
        return (
            <Container id="about-container" className="h-100 min-h-100 py-5 px-5" fluid={true}>
                <Row>
                    <Col xs={12}>
                        <WorkExperience />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Education />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Courses />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;