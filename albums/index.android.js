import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/album-list';

class App extends Component {
  render = () => (
    <View style={styles.container}>
      <Header title={'Albums'}/>
      <AlbumList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  text: {
    fontSize: 20
  }
});

AppRegistry.registerComponent('albums', () => App);
