import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NotFound.module.css';

const NotFound = () => (
  <Row>
    <Col xs={12} className="text-center">
      <h2>
        Not found
        {' '}
        <FontAwesomeIcon icon={['fas', 'frown']} className={styles.icon} />
      </h2>
    </Col>
  </Row>
);

export default NotFound;
