import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ComingSoon.module.css';

const ComingSoon = () => (
  <Row>
    <Col xs={12} className="text-center">
      <h2>
        Coming soon{' '}
        <FontAwesomeIcon
          icon={['fas', 'hourglass-half']}
          className={styles.icon}
        />
      </h2>
      <p>This section is under construction and will be available here soon.</p>
    </Col>
  </Row>
);

export default ComingSoon;
