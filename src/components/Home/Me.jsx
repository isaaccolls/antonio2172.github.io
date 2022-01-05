import React from 'react';
import { Row, Col, Spinner, Figure } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import SkillsAccordion from './SkillsAccordion';
import styles from './Me.module.css';

const Me = ({ skills }) => (
  <Row>
    <Col xs={12} sm={6} className="text-center">
      <Figure className="d-block d-sm-none w-50 h-auto mx-auto">
        <Figure.Image
          roundedCircle
          src="https://isaaccolls.website/data/images/profile/profile-pic.jpg"
          className={`shadow ${styles.profile}`}
          alt="profile-pic"
        />
      </Figure>
      <Figure className="d-none d-sm-block w-25 h-auto mx-auto">
        <Figure.Image
          roundedCircle
          src="https://isaaccolls.website/data/images/profile/profile-pic.jpg"
          className={`shadow ${styles.profile}`}
          alt="profile-pic"
        />
      </Figure>
      <h2>
        Who&apos;s this guy?{' '}
        <FontAwesomeIcon icon={['fas', 'search']} className={styles.icon} />
      </h2>
      <p className="text-justify mx-2 px-2 mx-lg-5 px-lg-5">
        Design and implementation specialist of applications that involve
        hardware and software to solve problems on IT industry.
        <br />
        My main focus these days is building cool things that make a impact on a
        changing world.
      </p>
    </Col>
    <Col xs={12} sm={6} className="text-center">
      <h2>
        <FontAwesomeIcon icon={['fas', 'user-ninja']} className={styles.icon} />{' '}
        I&apos;ve been working with:
      </h2>
      {/* error ? <Alert variant="danger">{`Error: ${error}`}</Alert> : null */}
      {skills !== undefined && skills.length > 0 ? (
        <SkillsAccordion skills={skills} />
      ) : (
        <Spinner animation="grow" variant="dark" />
      )}
      <p className="text-justify mt-2 mx-2 px-2 mx-lg-5 px-lg-5">
        Since the beginning of my career, I had my focus on been agnostic about
        technology. Where the most important to keep in mind is learning and
        implementing the best tool to give the best solution.
      </p>
    </Col>
  </Row>
);

Me.propTypes = {
  // eslint-disable-next-line
  skills: PropTypes.object.isRequired,
};

export default Me;
