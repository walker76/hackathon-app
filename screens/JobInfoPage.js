import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Tile } from 'react-native-elements';
import * as firebase from 'firebase';


class JobInfoPage extends React.Component {

  static navigationOptions = {
    title: 'Details',
  };

  constructor(props){
    super(props);
    const {state} = props.navigation;

    this.state = {
      id: state.params.id,
      job: [],
    }
  }

  componentDidMount(){
    console.log(this.state.id);
      fetch('https://wacode-hackathon-api.herokuapp.com/job/findById/' + this.state.id)
      .then(response => {
        return response.json();
      }).then(responseJSON => {
        this.setState({ job: responseJSON }, () => console.log("State", this.state))
      }).catch(err => {
        console.err("There was an error");
        console.error(err);
      });
    }

    onPress = () => {

      let email = firebase.auth().currentUser.email;

      JobUpdateRequest = {
        id: this.state.id,
        status: "ACCEPTED",
        workerId: email,
      }

      fetch('https://wacode-hackathon-api.herokuapp.com/job/updateJobStatus', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(JobUpdateRequest),
    }).catch(err => {
        console.error(err);
    });

    const { navigate } = this.props.navigation;
    navigate('Home');

      }

  render() {
      const list = this.state.data;
    return (
      // <Tile
      //   imageSrc={require('../assets/images/icon.png')}
      //   // title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
      //   // featured
      //   // caption="Some Caption Text"
      // >
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff' }}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Tile imageSrc={require('../assets/images/help.jpeg')}/>
            <View style={styles.container}>
              <Text style={styles.textInput}>Job Title: {this.state.job.title}{"\n"}</Text>
              <Text style={styles.textInput}>Job Description: {this.state.job.description}{"\n"}</Text>
              <Text style={styles.textInput}>Job Type: {this.state.job.type}{"\n"}</Text>
            </View>
            <TouchableOpacity style={styles.button}
              onPress={this.onPress}>
              <Text style={styles.textInput}>Accept</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      //</Tile>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#5cf441',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  textInput: {
    fontSize: 20,
    color: 'black',
  },
  contentContainer: {
    paddingTop: 30,
  }
});

export default JobInfoPage;
