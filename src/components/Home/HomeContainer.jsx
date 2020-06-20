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
    fetch('data/skills.json')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(skills => {
        console.log(`skills: ${JSON.stringify(skills)}`);
        skills = skills.sort((a, b) => {
          if (a.order > b.order) {
            return 1;
          } else {
            return -1;
          }
        });
        console.log(`skills: ${JSON.stringify(skills)}`);
        this.setState({ skills, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    return <Home data={this.state} />;
  }
}

export default HomeContainer;
