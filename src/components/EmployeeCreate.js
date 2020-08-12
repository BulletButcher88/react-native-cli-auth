import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions/EmployeeAction';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

class EmployeeCreate extends Component {

  onButtonPress() {
    const { empName, phone, shift } = this.props;
    this.props.employeeCreate({ name: empName, phone, shift: shift || 'Monday' });
  }

  render() {
    console.log(this.props.employee);
    return (
      <Card>
        <CardSection style={{ position: "absolute", top: 300 }}>
          <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 13,
    color: 'grey',
    paddingLeft: 20,
  },
};

const mapStateToProps = (state) => {
  const { empName, phone, shift } = state.employeeForm;
  return { empName, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate,
})(EmployeeCreate);
