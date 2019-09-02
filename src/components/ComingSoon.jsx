import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ComingSoon.css';

class ComingSoon extends Component {
    render() {
        return (
            <Container id="coming-soon-container" className="h-100 min-h-100 py-5" fluid={true}>
                <Row>
                    <Col>
                        <h2>Coming soon!</h2>
                        <p>This section under construction and will be available here soon.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ComingSoon;