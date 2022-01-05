import { createSelector } from 'reselect';
import { SET_CERTIFICATES_DATA } from '../actions/actionsTypes';

export const certificates = (state = {}, action) => {
  switch (action.type) {
    case SET_CERTIFICATES_DATA:
      return { ...state, certificates: action.payload.certificates };
    default:
      return state;
  }
};

export const getCertificates = createSelector(
  (state) => state.certificates,
  // eslint-disable-next-line
  (certificates) => certificates.certificates,
);
