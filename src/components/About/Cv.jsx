import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './About.module.css';

const Cv = () => (
  <>
    <Col xs={12}>
      <h2>
        Download my{' '}
        <small>
          <del>old school</del>
        </small>{' '}
        PDF CV{' '}
        <FontAwesomeIcon icon={['fas', 'download']} className={styles.icon2} />
      </h2>
    </Col>
    <Col xs={12} className="px-5">
      <Row className="px-2 py-2 px-sm-5 py-sm-5 d-flex justify-content-center">
        <a
          className={`text-decoration-none m-2 ${styles.link}`}
          target="_blank"
          rel="noopener noreferrer"
          href="https://isaaccolls.website/data/cv/cv-Isaac_Colls-en.pdf"
        >
          English CV{' '}
          <FontAwesomeIcon icon={['fas', 'file-pdf']} className="ml-2" />
        </a>
        <a
          className={`text-decoration-none m-2 ${styles.link}`}
          target="_blank"
          rel="noopener noreferrer"
          href="https://isaaccolls.website/data/cv/cv-Isaac_Colls-sp.pdf"
        >
          Spanish CV{' '}
          <FontAwesomeIcon icon={['fas', 'file-pdf']} className="ml-2" />
        </a>
      </Row>
    </Col>
  </>
);

export default Cv;
