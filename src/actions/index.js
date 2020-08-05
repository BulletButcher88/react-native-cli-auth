import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_ERROR, LOGIN_USER } from './types';

export const emailChange = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChange = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER })

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => loginSuccess(dispatch, user))
      .catch((err) => {
        err ? console.log(err) : null;
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => loginSuccess(dispatch, user))
          .catch((err) => loginUserFail(dispatch, err));
      });
  };
};

const loginUserFail = (dispatch, err) => {
  dispatch({
    type: LOGIN_ERROR,
    payload: err.message,
  });
};

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
  Actions.main();
};
