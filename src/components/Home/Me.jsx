import React from 'react';
import { Row, Col, Image, Spinner, Alert } from 'react-bootstrap';
import SkillsAccordion from './SkillsAccordion';
import me from '../../assets/images/me.JPG';
import './Me.css';

const Me = ({ data }) => {
  const { skills, isLoading, error } = data;
  return (
    <Row className="mt-3">
      <Col xs={6} className="text-center my-auto">
        <Image src={me} rounded fluid className="profile-pic" />
        <h1 className="mt-3">Who's this guy?</h1>
        <p className="text-justify">
          Design and implementation specialist of applications that involve
          hardware and software to solve problems on technological field.
        </p>
      </Col>
      <Col xs={6} className="text-center">
        <Row>
          <Col xs={12}>
            <h1>Skills</h1>
            <p className="text-left">
              Since the beginning of my career, I had my focus on been agnostic
              about technology. Where the most important to keep in mind is
              learning and implementing the best tool to give the best solution.
            </p>
          </Col>
        </Row>
        {error ? <Alert variant="danger">{`Error: ${error}`}</Alert> : null}
        {isLoading ? (
          <Spinner animation="grow" variant="dark" />
        ) : (
          <SkillsAccordion skills={skills} />
        )}
      </Col>
    </Row>
  );
};

export default Me;
