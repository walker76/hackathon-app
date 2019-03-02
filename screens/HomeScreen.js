import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Upcoming',
  };

  constructor(props){
    super(props);

    this.state = {
      list: []
    }
  }

  componentWillMount(){
    let userId = firebase.auth().currentUser.uid;

    let url = "https://wacode-hackathon-api.herokuapp.com/user/findJobsById/" + userId;
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

    if(this.state.list && this.state.list.size > 0){
      let comp = this.state.list.map((item, i) => (
        <ListItem
          key={i}
          title={item.title}
          titleContainerStyle={styles.titleContainerStyle}
          leftIcon = {<Icon name={item.icon} type={'font-awesome'} size={25}/>}
          height= {60}
        />
      ));

      return (
        <ScrollView style={styles.container}>
          {/* Go ahead and delete ExpoLinksView and replace it with your
             * content, we just wanted to provide you with some helpful links */}
          {/* <ExpoLinksView /> */}
          <View style={styles.container}>
            {comp}
          </View>
  
        </ScrollView>
      );
    } else {
      return (

        <View style={styles.noJobContainer}>
          <Text>No upcoming jobs/postings</Text>
        </View>
    );
    }

    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 70,
  },
  noJobContainer: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 70,
    margin: 15,
    textAlign: 'center',
    alignItems: 'center'
  },
  titleContainerStyle: {
    fontSize: 70,
  },
});