import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

class Contact extends Component {

    handleSubmit = event => {
        console.log("Sent email📬");
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        console.log("form: ", form);
    }

    render() {
        return (
            <Container id="contact-container" className="min-vh-100 py-5" fluid={true}>
                <Row>
                    <Col xs={{ span: 4, offset: 4 }} className="text-center">
                        <h3 className="testH3">Have a question or want to work together?</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span:6, offset:3 }}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlid="formContactName">
                                <Form.Control type="text" placeholder="Name" className="inputText" />
                            </Form.Group>
                            <Form.Group controlid="formContactEmail">
                                <Form.Control type="email" placeholder="Enter email" className="inputText" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control controlid="formContactMessage" as="textarea" rows="5" placeholder="Your message" className="inputText" />
                            </Form.Group>
                            <Button variant="dark" type="submit">
                                Submit{/*align it to right*/}
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;