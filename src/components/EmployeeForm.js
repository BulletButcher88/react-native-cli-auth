import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions/EmployeeAction';
import CardSection from '../components/common/CardSection';
import Input from '../components/common/Input';


class EmployeeForm extends Component {
  render() {
    const { name, phone, shift } = this.props ? this.props : null;
    return (
      <View>
        <CardSection>
          <Input
            placeholder="Jane Dole"
            label="name"
            value={name}
            onChangeText={(value) =>
              this.props.employeeUpdate({ prop: 'name', value })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="0000-555-555"
            label="phone"
            value={phone}
            onChangeText={(value) =>
              this.props.employeeUpdate({ prop: 'phone', value })
            }
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1, flexDirection: 'column' }}
            itemStyle={{ backgroundColor: "black", color: "#4285F4", fontSize: 22 }}
            selectedValue={shift}
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
      </View>
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
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
