import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';

import AlbumDetail from './album-detail';

// class based component
class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    console.log('component will mount in album list');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => this.setState({albums: response.data})).catch((error, message) => console.log('ERROR', error, message));
  }

  renderAlbums() {
    return this.state.albums.map((album) => <AlbumDetail key={album.title} album={album}/>);
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }

}

export default AlbumList;
