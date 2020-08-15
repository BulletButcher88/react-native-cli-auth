import React, { Component } from 'react';
import { API_KEY } from 'react-native-dotenv';
import ReduxTrunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import firebase from 'firebase';
import RouterComponent from './Router';

class App extends Component {
  UNSAFE_componentWillMount() {
    const config = {
      apiKey: API_KEY,
      authDomain: 'manager-rn997.firebaseapp.com',
      databaseURL: 'https://manager-rn997.firebaseio.com',
      projectId: 'manager-rn997',
      storageBucket: 'manager-rn997.appspot.com',
      messagingSenderId: '874844722383',
      appId: '1:874844722383:web:694997fbb4351409f193ba',
      measurementId: 'G-9X3L7WBXFW',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxTrunk))
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
};

export default App;
