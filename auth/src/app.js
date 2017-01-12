import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import {Button, Header, Spinner} from './components/common';
import {LoginForm} from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC0xrAwaMAxO0UydVRqrYoRPR2Fx1iqpVo',
      authDomain: 'rn02-auth.firebaseapp.com',
      databaseURL: 'https://rn02-auth.firebaseio.com',
      storageBucket: 'rn02-auth.appspot.com',
      messagingSenderId: '877859080955'
    });
    firebase.auth().onAuthStateChanged(user => {
      console.log('User state changed');
      if (user) {
        console.log('User is:', user);
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm/>;
      default:
        return <Spinner size='large'/>;
    }
  }

  render() {
    return (
      <View>
        <Header>Authentication</Header>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
