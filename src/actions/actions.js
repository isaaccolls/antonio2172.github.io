import {
  SET_SKILLS_DATA,
  SET_EXPERIENCE_DATA,
  SET_EDUCATION_DATA,
  SET_CERTIFICATES_DATA,
  SET_PROJECTS_DATA,
  SET_PROJECT_CATEGORY,
} from './actionsTypes';

const setSkillsData = payload => ({ type: SET_SKILLS_DATA, payload });

export const fetchSkills = () => {
  return dispatch => {
    const url =
      'https://isaaccolls.website/data/skills.json';
    dispatch(setSkillsData({}));
    return fetch(url)
      .then(res => res.json())
      .then(resJson => {
        const { skills } = resJson;
        const sortedSkills = skills.sort((a, b) =>
          a.order > b.order ? 1 : -1,
        );
        dispatch(setSkillsData({ skills: sortedSkills }));
      });
  };
};

const setExperienceData = payload => ({ type: SET_EXPERIENCE_DATA, payload });

export const fetchExperience = () => {
  return dispatch => {
    const url =
      'https://isaaccolls.website/data/experience.json';
    dispatch(setExperienceData({}));
    return fetch(url)
      .then(res => res.json())
      .then(resJson => {
        const { experience } = resJson;
        const sortedExperience = experience.sort((a, b) => new Date(a.startDate) < new Date(b.startDate) ? 1 : -1);
        dispatch(setExperienceData({ experience: sortedExperience }));
      });
  };
};

const setEducationData = payload => ({ type: SET_EDUCATION_DATA, payload });

export const fetchEducation = () => {
  return dispatch => {
    const url =
      'https://isaaccolls.website/data/education.json';
    dispatch(setEducationData({}));
    return fetch(url)
      .then(res => res.json())
      .then(resJson => {
        const { education } = resJson;
        const sortedEducation = education.sort((a, b) =>
          a.date > b.date ? -1 : 1,
        );
        dispatch(setEducationData({ education: sortedEducation }));
      });
  };
};

const setCertificatesData = payload => ({
  type: SET_CERTIFICATES_DATA,
  payload,
});

export const fetchCertificates = () => {
  return dispatch => {
    const url =
      'https://isaaccolls.website/data/certificates.json';
    dispatch(setCertificatesData({}));
    return fetch(url)
      .then(res => res.json())
      .then(resJson => {
        const { certificates } = resJson;
        const sortedCertificates = certificates.sort((a, b) =>
          a.date > b.date ? -1 : 1,
        );
        dispatch(setCertificatesData({ certificates: sortedCertificates }));
      });
  };
};

const setProjectsData = payload => ({
  type: SET_PROJECTS_DATA,
  payload,
});

export const fetchProjects = () => {
  return dispatch => {
    const url =
      // 'https://us-central1-portfolio-api-77f4e.cloudfunctions.net/api/projects';
      'https://isaaccolls.website/data/projects.json';
    dispatch(setProjectsData({}));
    return fetch(url)
      .then(res => res.json())
      .then(resJson => {
        const { projects } = resJson; dispatch(setProjectsData({ projects }))
      });
  };
};

export const setProjectCategory = payload => ({ type: SET_PROJECT_CATEGORY, payload });
