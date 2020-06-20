import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => {
  return (
    <Container id="footerContainer" className="py-3" fluid>
      <Row className="text-center">
        <Col xs={12} className="">
          <h3>
            <a
              className="text-decoration-none"
              href="https://github.com/antonio2172"
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
              href="https://www.instagram.com/isaaccolls/"
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
              href="mailto:colls_isaac@hotmail.com"
            >
              <FontAwesomeIcon icon={['fas', 'envelope']} />
            </a>
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
