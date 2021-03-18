import { createSelector } from 'reselect';
import { SET_CLIENTS_DATA } from '../actions/actionsTypes';

export const clients = (state = {}, action) => {
  switch (action.type) {
    case SET_CLIENTS_DATA:
      return { ...state, clients: action.payload.clients };
    default:
      return state;
  }
};

export const getClients = createSelector(
  (state) => state.clients,
  (clientsAux) => clientsAux.clients,
);
