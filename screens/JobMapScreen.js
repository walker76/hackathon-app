import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { MapView } from 'expo';

export default class JobMapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 31.5497,
          longitude: 97.1143,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});