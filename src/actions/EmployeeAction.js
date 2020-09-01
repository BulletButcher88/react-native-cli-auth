import firebase from 'firebase';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS } from './types';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' });
      });
    //the type: 'reset' above takes out the back-button that normally shows at the top of the page in the admin page
  };
};

export const employeeFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() })
      });
  };
};

export const employeeSave = ({ name, phone, shift, key }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${key}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.employeeList({ type: 'reset' })
      });
  };
};

export const employeeDelete = ({ key }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${key}`)
      .remove()
      .then(() => {
        Actions.employeeList({ type: 'reset' });
      });
  };
};
