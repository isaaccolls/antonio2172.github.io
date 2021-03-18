import React from 'react';
import {
  Row, Col, Spinner, Image,
} from 'react-bootstrap';
import styles from './About.module.css';

const Clients = ({ clients }) => (
  <>
    <Col xs={12}>
      <h2>Some people with I&apos;ve been working</h2>
      <p className="text-left mt-2">I did my bit on:</p>
      {/* <p>{JSON.stringify(clients)}</p> */}
    </Col>
    <Col xs={12}>
      <Row>
        {clients !== undefined && clients.length > 0
          ? clients.map((client) => (
            <Col xs={4} sm={2}>
              <Image src={client.logo} className={styles.client} alt="..." fluid />
            </Col>
          ))
          : <Spinner animation="grow" variant="dark" />}
      </Row>
    </Col>
  </>
);

export default Clients;
// <Image src="https://c0.klipartz.com/pngpicture/996/784/gratis-png-rick-y-morty-ilustracion-rick-y-morty-monstruos.png" className={styles.client} alt="..." fluid />
