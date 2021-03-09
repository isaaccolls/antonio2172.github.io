import React from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import './Contact.css';

const handleSubmit = (event) => {
  console.log('Sent email📬');
  event.preventDefault();
  event.stopPropagation();
  const form = event.currentTarget;
  console.log('form: ', form);
};

const Contact = () => (
  <>
    <Row>
      <Col xs={{ span: 10, offset: 1 }} sm={{ span: 4, offset: 4 }} className="text-center">
        <h3 className="testH3">Have a question or want to work together?</h3>
      </Col>
      <Col xs={{ span: 10, offset: 1 }} sm={{ span: 4, offset: 4 }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlid="formContactName">
            <Form.Control
              type="text"
              placeholder="Name"
              className="inputText"
            />
          </Form.Group>
          <Form.Group controlid="formContactEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="inputText"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              controlid="formContactMessage"
              as="textarea"
              rows="5"
              placeholder="Your message"
              className="inputText"
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
            {/* align it to right */}
          </Button>
        </Form>
      </Col>
    </Row>
  </>
);

export default Contact;
