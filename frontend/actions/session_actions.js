import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

// Regular actions
const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearSessionErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS,
  };
};

// Thunk actions
export const login = (user) => {
  return dispatch => SessionAPIUtil.signup(user).then(
    response => dispatch(receiveCurrentUser(response)),
    errors => dispatch(receiveSessionErrors(error.responseJSON))
  );
};

export const logout = () => {
  return dispatch => SessionAPIUtil.signup(user).then(
    response => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveSessionErrors(error.responseJSON))
  );
};

export const signup = (user) => {
  return dispatch => SessionAPIUtil.signup(user).then(
    response => dispatch(receiveCurrentUser(response)),
    errors => dispatch(receiveSessionErrors(error.responseJSON))
  );
};
