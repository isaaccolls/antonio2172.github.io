import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSkills } from '../../reducers/skills';
import { fetchSkills } from '../../actions';
import Abilities from './Abilities';
import Me from './Me';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchSkills();
  }

  render() {
    const { skills } = this.props;
    return (
      <>
        <Abilities />
        <div className="mt-5">
          <Me skills={skills} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ skills: getSkills(state) });

const mapDispatchToProps = (dispatch) => ({
  fetchSkills: (value) => dispatch(fetchSkills(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
