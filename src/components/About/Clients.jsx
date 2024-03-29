import React from 'react';
import { Row, Col, Spinner, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styles from './About.module.css';

const Clients = ({ clients }) => (
  <>
    <Col xs={12} className="mb-4">
      <h2>
        I did my bit on{' '}
        <FontAwesomeIcon icon={['fas', 'grin-wink']} className={styles.icon2} />
      </h2>
    </Col>
    <Col xs={12} className="px-5">
      <Row className={`px-2 py-2 px-sm-5 py-sm-5 ${styles.clients}`}>
        {clients !== undefined && clients.length > 0 ? (
          clients.map((client) => (
            <Col
              xs={4}
              sm={2}
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
        ) : (
          <Spinner animation="grow" variant="dark" />
        )}
      </Row>
    </Col>
  </>
);

Clients.propTypes = {
  // eslint-disable-next-line
  clients: PropTypes.object.isRequired,
};

export default Clients;
