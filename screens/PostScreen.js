import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
    ScrollView,
    StyleSheet,
    View,
  } from 'react-native';
  import { Text, Input } from 'react-native-elements';
  import RNPickerSelect from 'react-native-picker-select';


  const JobTypes = [
    {
      label: 'Miscellaneous',
      value: 'Miscellaneous',
    },
    {
        label: 'Food',
        value: 'Food',
    },
    {
        label: 'Handy Man',
        value: 'HandyMan',
    },
    {
        label: 'Company',
        value: 'Copmany',
    },
    {
      label: 'Driver',
      value: 'Driver',
  },
  {
    label: 'Professional',
    value: 'Professional',
},
{
  label: 'Recreation',
  value: 'Recreation',
  color: 'purple',
},
];
  
export default class PostScreen extends React.Component {
  static navigationOptions = {
    title: 'Post Job',
  };

  constructor(props){
    super(props);
    this.state = { JobType: '',};
  }

  render() {

    const placeholder = {
      label: 'Select a Job Type',
      value: null,
      color: 'blue',
      fontSize: 100,
  };


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
      placeholder='Job Type'
      />
      <Text>{"\n"}</Text> 
      <RNPickerSelect
      placeholder = {placeholder}
      items = {JobTypes}
      onValueChange ={(value) =>{
        this.setState({JobType: value,});
      }}
      style={pickerSelectStyles}
      
      />

    </View>
      
      
      
    );


  }
}
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 2.0,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 2.0,
      borderColor: 'gray',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
  },
});
