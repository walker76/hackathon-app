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
      title: state.params.title,
      description: state.params.description,
      email: state.params.email,
      type: state.params.type,
    }
  }

  componentDidMount(){
    }

  render() {
      const list = this.state.data;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
            <Text style={styles.textInput}>Job Title: {this.state.name}{"\n"}</Text>
            <Text style={styles.textInput}>Job Description: {this.state.description}{"\n"}</Text>
            <Text style={styles.textInput}>Job Type: {this.state.type}{"\n"}</Text>
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
