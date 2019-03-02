import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  
export default class PostScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <Text>This is the screen to post jobs</Text>;
  }
}
