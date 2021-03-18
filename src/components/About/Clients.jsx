import React from 'react';
import {
  Row, Col, Spinner, Image,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './About.module.css';

const Clients = ({ clients }) => (
  <>
    <Col xs={12} className="mb-4">
      <h2>
        I did my bit on
        {' '}
        <FontAwesomeIcon icon={['fas', 'smile-wink']} className={styles.icon} />
      </h2>
    </Col>
    <Col xs={12} className="px-5">
      <Row>
        {clients !== undefined && clients.length > 0
          ? clients.map((client) => (
            <Col
              xs={4}
              sm={3}
              key={`${client.client.replace(/\s/g, '').toLowerCase()}`}
              className="mb-4"
            >
              <a
                href={client.clientUrl ? client.clientUrl : ''}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <Image
                  src={client.logo}
                  className={styles.client}
                  alt={client.client}
                  fluid
                />
              </a>
            </Col>
          ))
          : <Spinner animation="grow" variant="dark" />}
      </Row>
    </Col>
  </>
);

export default Clients;
