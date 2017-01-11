import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import {Header} from './components/common';
import {LoginForm} from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC0xrAwaMAxO0UydVRqrYoRPR2Fx1iqpVo',
      authDomain: 'rn02-auth.firebaseapp.com',
      databaseURL: 'https://rn02-auth.firebaseio.com',
      storageBucket: 'rn02-auth.appspot.com',
      messagingSenderId: '877859080955'
    });
  }

  render() {
    return (
      <View>
        <Header>Authentication</Header>
        <LoginForm/>
      </View>
    );
  }
}

export default App;
