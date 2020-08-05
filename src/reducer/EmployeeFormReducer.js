import EMPLOYEE_UPDATE from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      console.log(action.payload);
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };
    default:
      return state;
  }
};

