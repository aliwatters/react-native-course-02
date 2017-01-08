import React, {Component} from 'react';

import {AppRegistry, Text, View, StyleSheet} from 'react-native';

class Hello extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hello World!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

AppRegistry.registerComponent('Hello', () => Hello);
