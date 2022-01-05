import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
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
import Cv from './Cv';

class AboutContainer extends Component {
  componentDidMount() {
    const {
      fetchExperienceAux,
      fetchEducationAux,
      fetchCertificatesAux,
      fetchClientsAux,
    } = this.props;
    fetchExperienceAux();
    fetchEducationAux();
    fetchCertificatesAux();
    fetchClientsAux();
  }

  render() {
    const { experience, education, certificates, clients } = this.props;
    return (
      <>
        <Row className="align-self-center text-center">
          <Col xs={12} className="mb-4">
            <h2>
              Experience{' '}
              <FontAwesomeIcon
                icon={['fas', 'user-graduate']}
                className={styles.icon2}
              />
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
        <Row className="mt-5 align-self-center text-center">
          <Clients clients={clients} />
        </Row>
        <Row className="mt-5 align-self-center text-center">
          <Cv />
        </Row>
      </>
    );
  }
}

AboutContainer.propTypes = {
  fetchExperienceAux: PropTypes.string.isRequired,
  fetchEducationAux: PropTypes.string.isRequired,
  fetchCertificatesAux: PropTypes.string.isRequired,
  fetchClientsAux: PropTypes.string.isRequired,
  // eslint-disable-next-line
  experience: PropTypes.object.isRequired,
  // eslint-disable-next-line
  education: PropTypes.object.isRequired,
  // eslint-disable-next-line
  certificates: PropTypes.object.isRequired,
  // eslint-disable-next-line
  clients: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  experience: getExperience(state),
  education: getEducation(state),
  certificates: getCertificates(state),
  clients: getClients(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchExperienceAux: (value) => dispatch(fetchExperience(value)),
  fetchEducationAux: (value) => dispatch(fetchEducation(value)),
  fetchCertificatesAux: (value) => dispatch(fetchCertificates(value)),
  fetchClientsAux: (value) => dispatch(fetchClients(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
