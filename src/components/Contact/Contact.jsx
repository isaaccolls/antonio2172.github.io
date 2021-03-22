import React from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <Col
        xs={12}
        sm={{ span: 8, offset: 2 }}
        className="text-center mb-4 px-1 px-sm-0"
      >
        <h2>Have a question or want to work together?</h2>
      </Col>
      <Col
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 4, offset: 4 }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group controlid="formContactName">
            <Form.Control
              type="text"
              placeholder="Full name"
            />
          </Form.Group>
          <Form.Group controlid="formContactEmail">
            <Form.Control
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              controlid="formContactMessage"
              as="textarea"
              rows="5"
              placeholder="Message"
            />
          </Form.Group>
          <Button type="submit" className="float-right">
            Submit
            {' '}
            <FontAwesomeIcon icon={['fas', 'paper-plane']} />
          </Button>
        </Form>
      </Col>
    </Row>
  </>
);

export default Contact;
