import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions/EmployeeAction';
import CardSection from './common/CardSection';
import Button from './common/Button';
import Card from './common/Card';

class EmployeeEdit extends Component {

  UNSAFE_componentWillMount() {
    if (this.props.employee) {
      Object.entries(this.props.employee).forEach(([prop, value]) => {
        this.props.employeeUpdate({ prop, value });
      });
    } else {
      return null;
    }
  }
  onButtonPush() {
    const { name, phone, shift } = this.props.employees;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection style={{ position: "absolute", top: 300 }}>
          <Button onPress={this.onButtonPush.bind(this)}>Save Changes</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const employees = state.employeeForm;
  return { employees };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
