import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ComingSoon.css';

const ComingSoon = () => (
  <Container
    className="min-vh-100 py-5 px-5 coming-soon"
    fluid={true}
  >
    <Row>
      <Col>
        <h2>Coming soon!</h2>
        <p>This section under construction and will be available here soon.</p>
      </Col>
    </Row>
  </Container>
);

export default ComingSoon;
