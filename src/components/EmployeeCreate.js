import React, { Component } from 'react';
import { Picker } from 'react-native';
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
          <Input
            placeholder="Jane Dole"
            label="empName"
            value={this.props.empName}
            onChangeText={(value) =>
              this.props.employeeUpdate({ prop: 'empName', value })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="0000-555-555"
            label="phone"
            value={this.props.phone}
            onChangeText={(value) =>
              this.props.employeeUpdate({ prop: 'phone', value })
            }
          />
        </CardSection>

        <CardSection>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={(value) =>
              this.props.employeeUpdate({ prop: 'shift', value })
            }>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button >Save</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { empName, phone, shift } = state.employeeForm;
  return { empName, phone, shift };
}
export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);

