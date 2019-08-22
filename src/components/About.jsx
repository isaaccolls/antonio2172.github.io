import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WorkExperience from './WorkExperience';
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
                        <h3>Education</h3>
                        <p>We don't really know where this goes - and I'm not sure we really care. You have to make almighty decisions when you're the creator.</p>
                        <p>There isn't a rule. You just practice and find out which way works best for you. In this world, everything can be happy.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;