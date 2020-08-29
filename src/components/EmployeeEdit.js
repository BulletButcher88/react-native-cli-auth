import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications'
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions/EmployeeAction';
import CardSection from './common/CardSection';
import Button from './common/Button';
import Card from './common/Card';
import Confirm from './common/Confirm';

class EmployeeEdit extends Component {
  state = { showModal: false };

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

  onTextPress() {
    const { phone, shift } = this.props.employees;
    Communications.text(phone, `Your up and coming shift is on ${shift}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection style={{ position: "absolute", top: 300 }}>
          <Button onPress={this.onButtonPush.bind(this)}>Save Changes</Button>
        </CardSection>
        <CardSection style={{ position: "absolute", top: 355 }}>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
        </CardSection>
        <CardSection style={{ position: "absolute", top: 410 }}>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </Button>
        </CardSection>
        <Confirm visible={this.state.showModal}>
          Are you sure you want to delete this employee?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const employees = state.employeeForm;
  return { employees };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
