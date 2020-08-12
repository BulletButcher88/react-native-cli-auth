import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import CardSection from '../components/common/CardSection';
import Input from '../components/common/Input';


class EmployeeForm extends Component {

  render() {
    return (
      <View>

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

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1, flexDirection: 'column' }}
            itemStyle={{ backgroundColor: "black", color: "#4285F4", fontSize: 22 }}
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
      </View>
    )
  }
}

export default EmployeeForm;