import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomParticles from './CustomParticles';
import './HomeBanner.css';

const HomeBanner = () => (
  <Container className="h-100" fluid>
    <Row className="h-100 d-flex align-items-center">
      <Col
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 4, offset: 4 }}
        className="text-center py-4 home-banner-tittle"
      >
        <h1>
          Hey, I'm <br className=".d-none .d-sm-block" />
          <strong>
            <em>Isaac Colls</em>
          </strong>
        </h1>
        <p className="my-1">Electronic and Computer Engineering</p>
        <p className="my-1">&</p>
        <p className="my-1">Full Stack developer</p>
      </Col>
    </Row>
    <CustomParticles />
  </Container>
);

export default HomeBanner;
