import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
<<<<<<< HEAD
import {ListItem, Icon} from 'react-native-elements';
=======
import {ListItem} from 'react-native-elements';
>>>>>>> master

class FindJobInfoScreen extends React.Component {

  static navigationOptions = {
    title: 'Find Jobs',
  };

  constructor(props){
    super(props);
    const {state} = props.navigation;

    this.state = {
      name: state.params.name,
      data: [],
    }
  }

  componentDidMount(){
    fetch('https://wacode-hackathon-api.herokuapp.com/job/findByJobType/' + this.state.name.toUpperCase())
    .then(response => {
      return response.json();
    }).then(responseJSON => {
      this.setState({ data: responseJSON }, () => console.log("State", this.state))
    }).catch(err => {
      console.err("There was an error");
      console.error(err);
    });
  }

  render() {
<<<<<<< HEAD
      const list = this.state.data;

      console.log(list);
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {/* <Text>This is an info screen. The name of the job is {this.state.name}</Text> */}
=======
    const list = this.state.data;
    console.log(list);

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text>This is an info screen. The name of the job is {this.state.name}</Text>
>>>>>>> master
          <View style={styles.container}>
            {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
<<<<<<< HEAD
                leftIcon = {<Icon name={'circle'} type={'font-awesome'} size={25}/>}
                height= {60}
                onPress={() => {
                    this._handleClick(item.email)
                  }
                }
                keyExtractor={item => item.email}
=======
                leftIcon = {<Icon name={'minus'} type={'font-awesome'} size={25}/>}
                height= {60}
                // onPress={() => {
                //     this._handleClick(item.title)
                //   }
                // }
                // keyExtractor={item => item.title}
>>>>>>> master
              />
            ))
          }
        </View>
        </ScrollView>
      </View>
    );
  }
<<<<<<< HEAD

  _handleClick(_email) {
    const { navigate } = this.props.navigation;
    navigate('JobDetails',{ email: _email });
  }
=======
>>>>>>> master
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
