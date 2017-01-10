import React from 'react';
import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import Button from './button';
import Card from './card';
import CardSection from './card-section';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url} = album;
  console.log('AlbumDetail', album);
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image source={{uri: thumbnail_image}} style={styles.thumbnail}/>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
          <Image source={{uri: image}} style={styles.image}/>
      </CardSection>
      <CardSection>
          <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  image: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailContainer: {
    marginLeft: 5,
    marginRight: 10
  },
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
});

export default AlbumDetail;
