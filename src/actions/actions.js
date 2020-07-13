import {
  SET_SKILLS_DATA,
  SET_EXPERIENCE_DATA,
  SET_EDUCATION_DATA,
  SET_CERTIFICATES_DATA,
} from './actionsTypes';

const setSkillsData = payload => ({ type: SET_SKILLS_DATA, payload });

export const fetchSkills = () => {
  return dispatch => {
    const url =
      'https://us-central1-portfolio-api-77f4e.cloudfunctions.net/api/skills';
    dispatch(setSkillsData({}));
    return fetch(url)
      .then(response => response.json())
      .then(skills => {
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
      'https://us-central1-portfolio-api-77f4e.cloudfunctions.net/api/experience';
    dispatch(setExperienceData({}));
    return fetch(url)
      .then(response => response.json())
      .then(experience => {
        const sortedExperience = experience.sort((a, b) =>
          a.startDate > b.startDate ? 1 : -1,
        );
        dispatch(setExperienceData({ experience: sortedExperience }));
      });
  };
};

const setEducationData = payload => ({ type: SET_EDUCATION_DATA, payload });

export const fetchEducation = () => {
  return dispatch => {
    const url =
      'https://us-central1-portfolio-api-77f4e.cloudfunctions.net/api/education';
    dispatch(setEducationData({}));
    return fetch(url)
      .then(response => response.json())
      .then(education => {
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
      'https://us-central1-portfolio-api-77f4e.cloudfunctions.net/api/certificates';
    dispatch(setCertificatesData({}));
    return fetch(url)
      .then(response => response.json())
      .then(certificates => {
        const sortedCertificates = certificates.sort((a, b) =>
          a.date > b.date ? -1 : 1,
        );
        dispatch(setCertificatesData({ certificates: sortedCertificates }));
      });
  };
};
