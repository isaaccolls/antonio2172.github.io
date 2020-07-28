import { createSelector } from 'reselect';
import {
  SET_PROJECTS_DATA,
  SET_PROJECT_CATEGORY,
} from '../actions/actionsTypes';

export const projects = (state = {}, action) => {
  switch (action.type) {
    case SET_PROJECTS_DATA:
      return { ...state, projects: action.payload.projects };
    case SET_PROJECT_CATEGORY:
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};

export const getProjects = createSelector(
  state => state.projects,
  projects => projects.projects,
);

export const getProjectCategory = createSelector(
  state => state.projects.selectedCategory,
  selectedCategory => selectedCategory,
);
