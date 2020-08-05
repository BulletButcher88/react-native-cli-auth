import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions/EmployeeAction';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input placeholder="Jane Dole" label="Name" />
        </CardSection>
        <CardSection>
          <Input placeholder="0000-555-555" label="Phone" />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button onPress={() => { }}>Save</Button>
        </CardSection>
      </Card>
    );
  }
}
export default EmployeeCreate;

