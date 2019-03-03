import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import * as firebase from 'firebase';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props){
    super(props);
    this._logout = this._logout.bind(this);
  }

  _logout(){
      firebase.auth().signOut()
      .then(() => this.props.navigation.navigate('Loading'))
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View>
        <ExpoConfigView />
        <Button 
          title="Logout"
          onPress={this._logout} 
        />
      </View>);
  }
}
