import { createSelector } from 'reselect';
import { SET_SKILLS_DATA } from '../actions/actionsTypes';

export const skills = (state = {}, action) => {
  switch (action.type) {
    case SET_SKILLS_DATA:
      return { ...state, skills: action.payload.skills };
    default:
      return state;
  }
};

export const getSkills = createSelector(
  (state) => state.skills,
  // eslint-disable-next-line
  (skills) => skills.skills,
);
