import { createSelector } from 'reselect';
import { SET_EDUCATION_DATA } from '../actions/actionsTypes';

export const education = (state = {}, action) => {
  switch (action.type) {
    case SET_EDUCATION_DATA:
      return { ...state, education: action.payload.education };
    default:
      return state;
  }
};

export const getEducation = createSelector(
  state => state.education,
  education => education.education,
);
