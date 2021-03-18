import {
  SET_SKILLS_DATA,
  SET_EXPERIENCE_DATA,
  SET_EDUCATION_DATA,
  SET_CERTIFICATES_DATA,
  SET_PROJECTS_DATA,
  SET_PROJECT_CATEGORY,
  SET_CLIENTS_DATA,
} from './actionsTypes';

const setSkillsData = (payload) => ({ type: SET_SKILLS_DATA, payload });
const baseUrl = process.env.NODE_ENV === 'production' ? 'https://isaaccolls.website/' : '';
const basePath = 'data/services/';

export const fetchSkills = () => (dispatch) => {
  const url = `${baseUrl}${basePath}skills.json`;
  dispatch(setSkillsData({}));
  return fetch(url)
    .then((res) => res.json())
    .then((resJson) => {
      const { skills } = resJson;
      const sortedSkills = skills.sort((a, b) => (a.order > b.order ? 1 : -1));
      dispatch(setSkillsData({ skills: sortedSkills }));
    });
};

const setExperienceData = (payload) => ({ type: SET_EXPERIENCE_DATA, payload });

export const fetchExperience = () => (dispatch) => {
  const url = `${baseUrl}${basePath}experience.json`;
  dispatch(setExperienceData({}));
  return fetch(url)
    .then((res) => res.json())
    .then((resJson) => {
      const { experience } = resJson;
      const sortedExperience = experience.sort(
        (a, b) => (new Date(a.startDate) < new Date(b.startDate) ? 1 : -1),
      );
      dispatch(setExperienceData({ experience: sortedExperience }));
    });
};

const setEducationData = (payload) => ({ type: SET_EDUCATION_DATA, payload });

export const fetchEducation = () => (dispatch) => {
  const url = `${baseUrl}${basePath}education.json`;
  dispatch(setEducationData({}));
  return fetch(url)
    .then((res) => res.json())
    .then((resJson) => {
      const { education } = resJson;
      const sortedEducation = education.sort((a, b) => (a.date > b.date ? -1 : 1));
      dispatch(setEducationData({ education: sortedEducation }));
    });
};

const setCertificatesData = (payload) => ({
  type: SET_CERTIFICATES_DATA,
  payload,
});

export const fetchCertificates = () => (dispatch) => {
  const url = `${baseUrl}${basePath}certificates.json`;
  dispatch(setCertificatesData({}));
  return fetch(url)
    .then((res) => res.json())
    .then((resJson) => {
      const { certificates } = resJson;
      const sortedCertificates = certificates.sort((a, b) => (a.date > b.date ? -1 : 1));
      dispatch(setCertificatesData({ certificates: sortedCertificates }));
    });
};

const setProjectsData = (payload) => ({
  type: SET_PROJECTS_DATA,
  payload,
});

export const fetchProjects = () => (dispatch) => {
  const url = `${baseUrl}${basePath}projects.json`;
  dispatch(setProjectsData({}));
  return fetch(url)
    .then((res) => res.json())
    .then((resJson) => {
      const { projects } = resJson;
      dispatch(setProjectsData({ projects }));
    });
};

export const setProjectCategory = (payload) => ({ type: SET_PROJECT_CATEGORY, payload });

const setClientsData = (payload) => ({
  type: SET_CLIENTS_DATA,
  payload,
});

export const fetchClients = () => (dispatch) => {
  const url = `${baseUrl}${basePath}clients.json`;
  dispatch(setClientsData({}));
  return fetch(url)
    .then((res) => res.json())
    .then((resJson) => {
      const { clients } = resJson;
      const randomClients = clients.sort(() => 0.5 - Math.random());
      dispatch(setClientsData({ clients: randomClients }));
    });
};
