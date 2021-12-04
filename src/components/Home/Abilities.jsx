import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Abilities.module.css';

const Abilities = () => (
  <Row>
    <Col xs={6} md={3}>
      <div className={`text-center ${styles.wrapper}`}>
        <h3 className={styles.icon}>
          <FontAwesomeIcon icon={['fas', 'hand-peace']} />
        </h3>
        <h3>Constructive</h3>
        <p className="text-center d-none d-sm-block">
          Always happy with positive attitude
          {' '}
          <a
            className={`text-decoration-none ${styles.link}`}
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
    <Col xs={6} md={3}>
      <div className={`text-center ${styles.wrapper}`}>
        <h3 className={styles.icon}>
          <FontAwesomeIcon icon={['fas', 'lightbulb']} />
        </h3>
        <h3>Proactive</h3>
        <p className="text-center d-none d-sm-block">
          Transforming ideas in actions and taking its responsibilities.
        </p>
      </div>
    </Col>
    <Col xs={6} md={3}>
      <div className={`text-center ${styles.wrapper}`}>
        <h3 className={styles.icon}>
          <FontAwesomeIcon icon={['fas', 'users']} />
        </h3>
        <h3>Team work</h3>
        <p className="text-center d-none d-sm-block">
          Each and every individual’s personal opinion matters.
        </p>
      </div>
    </Col>
    <Col xs={6} md={3}>
      <div className={`text-center ${styles.wrapper}`}>
        <h3 className={styles.icon}>
          <FontAwesomeIcon icon={['fas', 'handshake']} />
        </h3>
        <h3>Committed</h3>
        <p className="text-center d-none d-sm-block">
          Understanding consequences and impacts on the final product.
        </p>
      </div>
    </Col>
  </Row>
);

export default Abilities;
