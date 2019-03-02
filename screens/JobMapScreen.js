import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Constants, MapView, Location, Permissions } from 'expo';
import { CallOut, MapViewAnimated, Marker } from 'react-native-maps';

export default class JobMapScreen extends React.Component {

    state = { mapRegion: {
        latitude: 31.5497,
        longitude: -97.1143,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03 },
        locationResult: null,
        location: { coords: {
            latitude: 31.5497,
            longitude: -97.1143,}},
    };

    componentDidMount() {
        this._getLocationAsync();
    }
    
    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };
    
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if( status !== 'granted') {
            this.setState({ 
                locationResult: 'Location permission was denied!', location, });
        }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({locationResult: JSON.stringify(location), location, });
    };

  static navigationOptions = {
    title: 'Map',
  };

  getAllJobs(){
    let jobType = 'RECREATION';

    let url = "https://wacode-hackathon-api.herokuapp.com/user/findByJobType/" + jobType;
    fetch(url)
    .then(response => {
      return response.json();
    }).then(responseJSON => {
      this.setState({
        list: responseJSON
      });
    }).catch(err => {
      console.error(err);
    });
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: this.state.location.coords.latitude,
          longitude: this.state.location.coords.longitude,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
        >
        
        

        <Marker
        coordinate={{
            latitude: 31.5597,
            longitude: -97.1143,}}
        title="Handyman Request"
        description="Need 3 furniture items moved"
        pinColor='#ff0000'
        />

        <Marker
        coordinate={{
            latitude: 31.5395,
            longitude: -97.1243,}}
        title="Food Request"
        description="Need help with making food"
        pinColor='#ff8000'
        />

        <Marker
        coordinate={{
            latitude: 31.5597,
            longitude: -97.12,}}
        title="Company Request"
        description="Need a friend to talk to"
        pinColor='#ffff00'
        />

        <Marker
        coordinate={{
            latitude: 31.535,
            longitude: -97.112,}}
        title="Driving Request"
        description="Need a drive to the grocery store"
        pinColor='#0080ff'
        />

        <Marker
        coordinate={{
            latitude: 31.5497,
            longitude: -97.11,}}
        title="Professional Request"
        description="Need help with a resume"
        pinColor='#8000ff'
        />

        <Marker
        coordinate={{
            latitude: 31.5497,
            longitude: -97.1243,}}
        title="Recreation Request"
        description="Need a friend to play games with"
        pinColor='#ff0000'
        />
        </MapView>
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