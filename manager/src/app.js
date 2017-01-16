import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAD9xLB8M-p24A9vFN5DkwgmtrYPqjDgzY',
      authDomain: 'rn02-manager.firebaseapp.com',
      databaseURL: 'https://rn02-manager.firebaseio.com',
      storageBucket: 'rn02-manager.appspot.com',
      messagingSenderId: '637356123113'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
          <LoginForm></LoginForm>
      </Provider>
    );
  }
}

export default App;
