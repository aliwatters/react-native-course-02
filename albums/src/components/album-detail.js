import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from './card';

const AlbumDetail = (props) => {
  console.log('AlbumDetail', props.album);
  return (
    <Card>
      <Text style={styles.text}>{props.album.title}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
  }
});

export default AlbumDetail;
