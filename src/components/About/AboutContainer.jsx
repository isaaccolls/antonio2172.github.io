import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './About.module.css';
import { getExperience } from '../../reducers/experience';
import { getEducation } from '../../reducers/education';
import { getCertificates } from '../../reducers/certificates';
import { getClients } from '../../reducers/clients';
import {
  fetchExperience,
  fetchEducation,
  fetchCertificates,
  fetchClients,
} from '../../actions';
import Experience from './Experience';
import Education from './Education';
import Certificates from './Certificates';
import Clients from './Clients';

class AboutContainer extends Component {
  componentDidMount() {
    this.props.fetchExperience();
    this.props.fetchEducation();
    this.props.fetchCertificates();
    this.props.fetchClients();
  }

  render() {
    const {
      experience,
      education,
      certificates,
      clients,
    } = this.props;
    return (
      <>
        <Row className="align-self-center text-center">
          <Col xs={12} className="mb-4">
            <h2>
              Experience
              {' '}
              <FontAwesomeIcon icon={['fas', 'user-graduate']} className={styles.icon2} />
            </h2>
          </Col>
          <Col xs={12}>
            <Experience experience={experience} />
          </Col>
          <Col xs={12} className="mt-4">
            <Education education={education} />
          </Col>
          <Col xs={12} className="mt-4">
            <Certificates certificates={certificates} />
          </Col>
        </Row>
        <Row className="align-self-center text-center">
          <Clients clients={clients} />
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  experience: getExperience(state),
  education: getEducation(state),
  certificates: getCertificates(state),
  clients: getClients(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchExperience: (value) => dispatch(fetchExperience(value)),
  fetchEducation: (value) => dispatch(fetchEducation(value)),
  fetchCertificates: (value) => dispatch(fetchCertificates(value)),
  fetchClients: (value) => dispatch(fetchClients(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
