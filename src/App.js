import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import firebase from 'firebase';

import LoginForm from './components/LoginForm';

class App extends Component {
  UNSAFE_componentWillMount() {
    const config = {
      apiKey: "AIzaSyBp1sV89Zlo-Cqz7ZiLBvtmB4Qn6ltbrF0",
      authDomain: "manager-rn997.firebaseapp.com",
      databaseURL: "https://manager-rn997.firebaseio.com",
      projectId: "manager-rn997",
      storageBucket: "manager-rn997.appspot.com",
      messagingSenderId: "874844722383",
      appId: "1:874844722383:web:694997fbb4351409f193ba",
      measurementId: "G-9X3L7WBXFW"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <LoginForm />
      </Provider>
    );
  }
};

export default App;
