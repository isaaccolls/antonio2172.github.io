import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WorkExperience from '../../components/WorkExperience';
import Education from '../../components/Education';
import Courses from '../../components/Courses';
import './About.css';

class About extends Component {

    render() {
        return (
            <Container id="about-container" className="min-vh-100 py-5 px-5" fluid={true}>
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
