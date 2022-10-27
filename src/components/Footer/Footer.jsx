import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.css';

const Footer = () => (
  <Container className={`py-3 ${styles.footer}`} fluid>
    <Row className="mt-auto text-center">
      <Col xs={12}>
        <h3>
          <a
            className="text-decoration-none"
            href="https://github.com/isaaccolls"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a
            className="text-decoration-none ml-4"
            href="https://www.linkedin.com/in/isaac-colls/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
          <a
            className="text-decoration-none ml-4"
            href="https://www.instagram.com/isaaccolls/?theme=dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
          <a
            className="text-decoration-none ml-4"
            href="https://www.facebook.com/isaac.colls"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>
          <a
            className="text-decoration-none ml-4"
            href="https://steamcommunity.com/id/isaaccolls/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'steam']} />
          </a>
        </h3>
      </Col>
    </Row>
  </Container>
);

export default Footer;
