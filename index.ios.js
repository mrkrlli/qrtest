/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Camera from 'react-native-camera';

export default class QrTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artPieces: 0,
      artArray: []
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          onBarCodeRead={this.readBarCode.bind(this)}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>Art Pieces: {this.state.artPieces}</Text>
        </Camera>
      </View>
    );
  }

  readBarCode(e) {
    if (!this.state.artArray.includes(e.data)) {
      console.log(e.data + '------>>>> bar code read');
      const artPieces = this.state.artPieces + 1;

      this.setState({
        artArray: this.state.artArray.concat([e.data]),
        artPieces: artPieces
      });
    }
  }

  takePicture() {
    console.log('-------->>>> getting logged')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
AppRegistry.registerComponent('QrTest', () => QrTest);
