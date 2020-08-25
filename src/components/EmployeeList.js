import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { employeeFetch } from '../actions/EmployeeAction';

class EmployeeList extends Component {
  UNSAFE_componentWillMount() {
    this.props.employeeFetch();
  }

  createDataSource(employees) {
    let employeeArr = [];
    if (employees) {
      employeeArr = Object.keys(employees).map(function (k, y) {
        let empOjb = employees[k];
        empOjb.key = k;
        return empOjb;
      });
    }
    return (
      <FlatList
        data={employeeArr}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => Actions.employeeEdit({ employee: item })}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  render() {
    if (this.props.employees) {
      return (
        <View>
          {this.createDataSource(this.props.employees)}
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const mapStateToProps = (state) => {
  const employees = state.employees;
  return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
