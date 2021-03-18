import { combineReducers } from 'redux';
import { skills } from './skills';
import { experience } from './experience';
import { education } from './education';
import { certificates } from './certificates';
import { projects } from './projects';
import { clients } from './clients';

export default combineReducers({
  skills,
  experience,
  education,
  certificates,
  projects,
  clients,
});
