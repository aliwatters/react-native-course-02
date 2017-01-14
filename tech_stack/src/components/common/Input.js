import React from 'react';
import {TextInput, View, Text} from 'react-native';

// should have a input - email, pass, other
const Input = ({label, value, onChangeText, placeholder, secureTextEntry, keyboardType}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = {
    label: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
    },
    input: {
      color: '#000',
      paddingRight: 5,
      fontSize: 18,
      paddingLeft: 5,
      lineHeight: 23,
      flex: 2
    },
    container: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
};

export {Input};
