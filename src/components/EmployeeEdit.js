import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../actions/EmployeeAction';
import CardSection from './common/CardSection';
import Button from './common/Button';
import Card from './common/Card';

class EmployeeEdit extends Component {

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={() => console.log(this.props.name)}>
            Save Changes {this.props.name}
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employees;
  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);
