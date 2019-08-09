import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <Container id="footerContainer" className="py-3" fluid>
                <Row className="text-center">
                    <Col xs={12}>
                        <h3>Contact data here!</h3>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;