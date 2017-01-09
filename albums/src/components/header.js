import React from 'react';
import {Platform, Text, StyleSheet, View} from 'react-native';

// functional component
const Header = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: (Platform.OS === 'ios')
      ? 60
      : 45,
    paddingTop: (Platform.OS === 'ios')
      ? 15
      : 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    elevation: 3,
    position: 'relative'
  },
  text: {
    fontSize: 20
  }
});

export default Header;
