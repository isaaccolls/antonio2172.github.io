import React from 'react';
import {
  Row, Col, Image, Spinner,
} from 'react-bootstrap';
import SkillsAccordion from './SkillsAccordion';
import styles from './Me.module.css';

const Me = ({ skills }) => (
  <Row>
    <Col xs={12} sm={6} className="text-center my-auto">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-api-77f4e.appspot.com/o/profile-pic.JPG?alt=media"
        rounded
        className={styles.image}
        alt="profile-pic"
      />
      <h1 className="mt-3">Who&apos;s this guy?</h1>
      <p className="text-justify mx-2 px-2 mx-lg-5 px-lg-5">
        Design and implementation specialist of applications that involve
        hardware and software to solve problems on technological field.
      </p>
    </Col>
    <Col xs={12} sm={6} className="text-center">
      <h1>Skills</h1>
      <p className="text-justify mx-2 px-2 mx-lg-5 px-lg-5">
        Since the beginning of my career, I had my focus on been agnostic about
        technology. Where the most important to keep in mind is learning and
        implementing the best tool to give the best solution.
      </p>
      {/* error ? <Alert variant="danger">{`Error: ${error}`}</Alert> : null */}
      {skills !== undefined && skills.length > 0 ? (
        <SkillsAccordion skills={skills} />
      ) : (
        <Spinner animation="grow" variant="dark" />
      )}
    </Col>
  </Row>
);

export default Me;
