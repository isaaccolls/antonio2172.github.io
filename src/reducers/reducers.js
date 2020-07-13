import { combineReducers } from 'redux';
import { skills } from './skills';
import { experience } from './experience';
import { education } from './education';
import { certificates } from './certificates';

export default combineReducers({
  skills,
  experience,
  education,
  certificates,
});
