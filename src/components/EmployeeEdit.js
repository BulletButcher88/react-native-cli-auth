import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm'
import { employeeUpdate } from '../actions/EmployeeAction'
import CardSection from './common/CardSection';
import Button from './common/Button';
import Card from './common/Card';

class EmployeeEdit extends Component {
  onButtonPush() {
    console.log(this.props.employee);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={() => this.onButtonPush()}>
            Save
          </Button>
        </CardSection>
      </Card>
    )
  }
}


export default connect(null, { employeeUpdate })(EmployeeEdit);