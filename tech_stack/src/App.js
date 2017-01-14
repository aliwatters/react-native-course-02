import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {Header} from './components/common';
import LibraryList from './components/LibraryList';
import Reducers from './reducers';

const App = () => {
  return (
    <Provider store={createStore(Reducers)}>
      <View style={{flex: 1}}>
        <Header>Tech Stack</Header>
        <LibraryList/>
      </View>
    </Provider>
  );
};

export default App;
