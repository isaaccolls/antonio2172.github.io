import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ParticleComponent from './ParticleComponent';
import './HomeBanner.css';

const HomeBanner = () => (
  <div className="min-vh-100">
    <ParticleComponent />
    <Container id="home-banner-container" className="h-100" fluid={true}>
      <Row className="h-100">
        <Col xs={{ span: 6, offset: 3 }} className="my-auto text-center">
          <div className="home-banner-tittle">
            <h1>
              Hello, I'm <strong>Isaac Colls</strong>
            </h1>
            <h2>Electronic and Computer Engineering</h2>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HomeBanner;
