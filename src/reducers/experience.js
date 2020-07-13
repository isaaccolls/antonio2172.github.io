import { createSelector } from 'reselect';
import { SET_EXPERIENCE_DATA } from '../actions/actionsTypes';

export const experience = (state = {}, action) => {
  switch (action.type) {
    case SET_EXPERIENCE_DATA:
      return { ...state, experience: action.payload.experience };
    default:
      return state;
  }
};

export const getExperience = createSelector(
  state => state.experience,
  experience => experience.experience,
);
