import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { getExperience } from '../../reducers/experience';
import { getEducation } from '../../reducers/education';
import { getCertificates } from '../../reducers/certificates';
import {
  fetchExperience,
  fetchEducation,
  fetchCertificates,
} from '../../actions';
import Experience from './Experience';
import Education from './Education';
import Certificates from './Certificates';
import './AboutContainer.css';

class AboutContainer extends Component {
  componentDidMount() {
    this.props.fetchExperience();
    this.props.fetchEducation();
    this.props.fetchCertificates();
  }

  render() {
    const { experience, education, certificates } = this.props;
    return (
      <Container className="p-1 p-sm-5 about-container" fluid>
        <Row>
          <Col xs={12}>
            <Experience experience={experience} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Education education={education} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Certificates certificates={certificates} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  experience: getExperience(state),
  education: getEducation(state),
  certificates: getCertificates(state),
});

const mapDispatchToProps = dispatch => ({
  fetchExperience: value => dispatch(fetchExperience(value)),
  fetchEducation: value => dispatch(fetchEducation(value)),
  fetchCertificates: value => dispatch(fetchCertificates(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
