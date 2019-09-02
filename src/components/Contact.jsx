import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <Container id="contact-container" className="h-100 min-h-100 py-5" fluid={true}>
                <Row>
                    <Col>
                        Contact form here!
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;