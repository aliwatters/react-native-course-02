import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
