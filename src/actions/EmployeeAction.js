import { EMPLOYEE_UPDATE } from './types';
import EmployeeCreate from '../components/EmployeeCreate';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};

export default employeeCreate = ({ name, phone, shift }) => {
  console.log(name, phone, shift);
};
