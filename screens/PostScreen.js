import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
    ScrollView,
    StyleSheet,
    View,
  } from 'react-native';
  import { Text, Input } from 'react-native-elements';
  
export default class PostScreen extends React.Component {
  static navigationOptions = {
    title: 'Post Job',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
    <View>
      <Text h2>Post a New Job{"\n"}</Text>
      <Input
      placeholder='Job Title'
      />
      <Text>{"\n"}</Text> 
      <Input
      placeholder='Job Description'
      />
      <Text>{"\n"}</Text> 
      <Input
      placeholder=''
      />
        
    </View>
      
      
      
    );


  }
}
