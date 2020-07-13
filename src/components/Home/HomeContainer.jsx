import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import Abilities from './Abilities';
import Me from './Me';
import './HomeContainer.css';
import { getSkills } from '../../reducers/skills';
import { fetchSkills } from '../../actions';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchSkills();
  }

  render() {
    const { skills } = this.props;
    return (
      <Container className="min-vh-100 py-5 px-5 home-container" fluid={true}>
        <Abilities />
        <Me skills={skills} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({ skills: getSkills(state) });

const mapDispatchToProps = dispatch => ({
  fetchSkills: value => dispatch(fetchSkills(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
