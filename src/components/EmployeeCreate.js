import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions/EmployeeAction';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift, key } = this.props;
    this.props.employeeCreate({ name: name, phone: phone || "No number", shift: shift || 'Monday', key: key });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection style={{ position: "absolute", top: 300 }}>
          <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift, key } = state.employeeForm;
  return { name, phone, shift, key };
};

export default connect(mapStateToProps, {
  employeeCreate,
})(EmployeeCreate);
