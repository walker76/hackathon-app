import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,
  } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import * as firebase from 'firebase';
import {Permissions, Location} from 'expo';


const JobTypes = [
  {
      label: 'Food',
      value: 'FOOD',
  },
  {
      label: 'Handy Man',
      value: 'HANDYMAN',
  },
  {
      label: 'Company',
      value: 'COMPANY',
  },
  {
    label: 'Driver',
    value: 'DRIVER',
},
{
  label: 'Professional',
  value: 'PROFESSIONAL',
},
{
  label: 'Recreation',
  value: 'RECREATION',
  color: 'purple',
},
{
  label: 'Miscellaneous',
  value: 'MISC',
},

];

  
export default class PostScreen extends React.Component {
  static navigationOptions = {
    title: 'Post Job',
  };

  constructor(props){
    super(props);
    let userId = firebase.auth().currentUser.uid;

    this._getLocationAsync();

    this.state = { 
      type: 'DEFAULT',
      title: '',
      description: '',
      posterId: userId,
      location: { coords: {
        lat: 31.5497,
        long: -97.1143,}},
  };
  }

  onPress = () => {

    let jobRequest = {
      title: this.state.title,
      type: this.state.type,
      description: this.state.description,
      posterId: this.state.posterId,
      lat: this.state.location.coords.lat,
      long: this.state.location.coords.long,

    }

     fetch('https://wacode-hackathon-api.herokuapp.com/job/insert', {
      method: 'PUT',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobRequest),
  }).catch(err => {
      console.error(err);
  });

    const { navigate } = this.props.navigation;
    navigate('PostConfirmation');
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if( status !== 'granted') {
        this.setState({ 
            locationResult: 'Location permission was denied!', location, });
    }

let location = await Location.getCurrentPositionAsync({});
this.setState({locationResult: JSON.stringify(location), location, });
};

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

      <View style={styles.container}>  

        <Text style={styles.title}> Post a New Job{"\n"}</Text>   

        <Input
          placeholder='Job Title'
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />
        
        <Text>{"\n"}</Text> 
        
        <Input
          placeholder='Job Description'
          onChangeText={description => this.setState({ description })}
          value={this.state.description}
        />
        
        <Text>{"\n"}</Text> 
        
        <RNPickerSelect
          placeholder = {placeholder}
          items = {JobTypes}
          onValueChange ={(value) =>{
            this.setState({type: value,});
          }}
          style={pickerSelectStyles}
        />
        
        <Text>{"\n"}</Text> 

        <TouchableOpacity style={styles.button}
        onPress={this.onPress}>
          <Text style={styles.textInput}>Submit</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#5cf441',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  textInput: {
    fontSize: 15,
    color: 'black',

  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 15,
  }
})
  
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
