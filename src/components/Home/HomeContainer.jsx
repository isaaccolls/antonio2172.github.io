import React, { Component } from 'react';
import Home from './Home';

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
        this.setState({ skills, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    return <Home data={this.state} />;
  }
}

export default HomeContainer;
