import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { employeeFetch } from '../actions/EmployeeAction'

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeeFetch();
  }

  render() {
    return (
      <View>
        <Text>LIST OF WORKERS</Text>
        <Text>LIST OF WORKERS</Text>
        <Text>LIST OF WORKERS</Text>
        <Text>LIST OF WORKERS</Text>
        <Text>LIST OF WORKERS</Text>
      </View>
    );
  }
};


export default connect(null, { employeeFetch })(EmployeeList);
