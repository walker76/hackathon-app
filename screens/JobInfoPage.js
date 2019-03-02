import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ListItem} from 'react-native-elements';

class JobInfoPage extends React.Component {

  static navigationOptions = {
    title: 'Details',
  };

  constructor(props){
    super(props);
    const {state} = props.navigation;

    this.state = {
      email: state.params.email,
      job: [],
    }
  }

  componentDidMount(){
      fetch('https://wacode-hackathon-api.herokuapp.com/job/findById/' + this.state.email)
      .then(response => {
        return response.json();
      }).then(responseJSON => {
        this.setState({ job: responseJSON }, () => console.log("State", this.state))
      }).catch(err => {
        console.err("There was an error");
        console.error(err);
      });
    }

  render() {
      const list = this.state.data;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
            <Text style={styles.textInput}>Job Title: {this.state.job.name}{"\n"}</Text>
            <Text style={styles.textInput}>Job Description: {this.state.job.description}{"\n"}</Text>
            <Text style={styles.textInput}>Job Type: {this.state.job.type}{"\n"}</Text>
            <Text style={styles.textInput}>User Email: {this.state.email}{"\n"}</Text>
        </View>
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
  textInput: {
    fontSize: 15,
    color: 'black',
  },
  contentContainer: {
    paddingTop: 30,
  }
});

export default JobInfoPage;
