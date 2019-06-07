import * as Actions from '../constants/actions';

export const throwError = (payload) => ({
  type: Actions.EMIT_ERROR,
  payload
});

export const fetchMake = () => ({
  type: Actions.FETCH_MAKE
});

export const setMake = (payload) => ({
  type: Actions.SET_MAKE,
  payload
});

export const saveMake = (payload) => ({
  type: Actions.SAVE_MAKE,
  payload
});

export const setModel = (payload) => ({
  type: Actions.SET_MODEL,
  payload
});

export const saveModel = (payload) => ({
  type: Actions.SAVE_MODEL,
  payload
});

export const showSummary = () => ({
  type: Actions.SHOW_SUMMARY
});
