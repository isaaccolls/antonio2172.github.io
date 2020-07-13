import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Abilities.css';

const Abilities = () => (
  <Row className="text-center">
    <Col xs={2}>
      <div className="ability-wrapper">
        <h3 className="ability-icon">
          <FontAwesomeIcon icon={['fas', 'hand-peace']} />
        </h3>
        <h3>Resilience</h3>
        <p className="text-center">
          Always happy with positive attitude{' '}
          <a
            className="text-decoration-none"
            href="https://en.wikipedia.org/wiki/Hakuna_matata"
            target="_blank"
            rel="noopener noreferrer"
          >
            #hakunaMatata
          </a>
          .
        </p>
      </div>
    </Col>
    <Col xs={2}>
      <div className="ability-wrapper">
        <h3 className="ability-icon">
          <FontAwesomeIcon icon={['fas', 'lightbulb']} />
        </h3>
        <h3>Proactive</h3>
        <p className="text-center">
          Transforming ideas in actions and taking its responsibilities.
        </p>
      </div>
    </Col>
    <Col xs={2}>
      <div className="ability-wrapper">
        <h3 className="ability-icon">
          <FontAwesomeIcon icon={['fas', 'users']} />
        </h3>
        <h3>Team work</h3>
        <p className="text-center">
          Each and every individual’s personal opinion matters.
        </p>
      </div>
    </Col>
    <Col xs={2}>
      <div className="ability-wrapper">
        <h3 className="ability-icon">
          <FontAwesomeIcon icon={['fas', 'sitemap']} />
        </h3>
        <h3>Leadership</h3>
        <p className="text-center">
          Just listening and understanding to take a common goal.
        </p>
      </div>
    </Col>
    <Col xs={2}>
      <div className="ability-wrapper">
        <h3 className="ability-icon">
          <FontAwesomeIcon icon={['fas', 'handshake']} />
        </h3>
        <h3>Committed</h3>
        <p className="text-center">
          Understanding consequences and impacts on the final product.
        </p>
      </div>
    </Col>
    <Col xs={2}>
      <div className="ability-wrapper">
        <h3 className="ability-icon">
          <FontAwesomeIcon icon={['fas', 'book-reader']} />
        </h3>
        <h3>Self learner</h3>
        <p className="text-center">
          Formulating learning goals in an ever changing world.
        </p>
      </div>
    </Col>
  </Row>
);

export default Abilities;
