import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, StyleSheet } from 'react-native';
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
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
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

const mapStatesToProps = state => {
  const employees = state.employees;
  return { employees };
};

export default connect(mapStatesToProps, { employeeFetch })(EmployeeList);
