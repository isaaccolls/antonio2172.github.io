import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => (
  <Container
    className="min-vh-100 py-5 px-5 not-found"
    fluid={true}
  >
    <Row>
      <Col>
        <h2>Not found =(</h2>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
