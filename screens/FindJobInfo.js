import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ListItem} from 'react-native-elements';

class FindJobInfoScreen extends React.Component {

  static navigationOptions = {
    title: 'Details',
  };

  constructor(props){
    super(props);
    const {state} = props.navigation;

    this.state = {
      name: state.params.name
    }
  }

  componentDidMount(){
    fetch('https://wacode-hackathon-api.herokuapp.com/')
        .then(response => {
            //console.debug(response);
            return response.json();
        }).then(responseJSON => {
            //console.debug(responseJSON);
            return responseJSON.results;
        }).catch(err => {
            console.error(err);
        });
    }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text>This is an info screen. The name of the job is {this.state.name}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  }
});

export default FindJobInfoScreen;
