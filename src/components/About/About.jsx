import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Courses from './Courses';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workExperience: [],
      courses: [],
      education: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchWorkExperience();
    this.fetchEducation();
    this.fetchCourses();
  }

  fetchWorkExperience = () => {
    this.setState({ isLoading: true });
    fetch(
      'https://us-central1-portfolio-api-77f4e.cloudfunctions.net/api/experience',
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(workExperience =>
        this.setState({ workExperience, isLoading: false }),
      )
      .catch(error => this.setState({ error, isLoading: false }));
  };

  fetchEducation = () => {
    this.setState({ isLoading: true });
    fetch(
      'https://us-central1-portfolio-api-77f4e.cloudfunctions.net/api/education',
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(education => this.setState({ education, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  };

  fetchCourses = () => {
    this.setState({ isLoading: true });
    fetch(
      'https://us-central1-portfolio-api-77f4e.cloudfunctions.net/api/certificates',
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(courses => this.setState({ courses, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    return (
      <Container
        id="about-container"
        className="min-vh-100 py-5 px-5"
        fluid={true}
      >
        <Row>
          <Col xs={12}>
            <WorkExperience data={this.state} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Education data={this.state} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Courses data={this.state} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
