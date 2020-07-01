import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Abilities from './Abilities';
import Me from './Me';
import './HomeContainer.css';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchSkills();
  }

  fetchSkills = () => {
    this.setState({ isLoading: true });
    fetch(
      'https://us-central1-portfolio-api-77f4e.cloudfunctions.net/api/skills',
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(skills => {
        const sortedSkills = skills.sort((a, b) =>
          a.order > b.order ? 1 : -1,
        );
        this.setState({ skills: sortedSkills, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    return (
      <Container className="min-vh-100 py-5 px-5 home-container" fluid={true}>
        <Abilities />
        <Me data={this.state} />
      </Container>
    );
  }
}

export default HomeContainer;
