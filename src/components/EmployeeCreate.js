import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions/EmployeeAction';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  onButtonPress() {
    const { empName, phone, shift } = this.props;
    this.props.employeeCreate({ name: empName, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection style={{ position: "absolute", top: 300 }}>
          <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { empName, phone, shift } = state.employeeForm;
  return { empName, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate,
})(EmployeeCreate);
