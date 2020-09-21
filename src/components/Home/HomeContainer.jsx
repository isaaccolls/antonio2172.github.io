import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { getSkills } from '../../reducers/skills';
import { fetchSkills } from '../../actions';
import Abilities from './Abilities';
import Me from './Me';
import './HomeContainer.css';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchSkills();
  }

  render() {
    const { skills } = this.props;
    return (
      <Container className="h-auto p-1 p-sm-5 home-container" fluid>
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
