import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => (
  <Container className="min-vh-100 py-5 px-5" fluid={true}>
    <Row>
      <Col>
        <h2>404 - Page not found</h2>
        <p>The page you requested could not be found</p>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
