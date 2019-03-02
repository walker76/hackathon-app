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
    }
  }

  componentDidMount(){
    fetch('https://wacode-hackathon-api.herokuapp.com/job/findById/' + this.state.email)
        //.then(response => response.json())
        .then(response => this.setState({ data: response.json() }))
        .catch(err => {
            console.error(err);
        });
    }

  render() {
      const list = this.state.data;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text>This is an info screen. The name of the job is {this.state.name}</Text>
          <View style={styles.container}>
            {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                //leftIcon = {<Icon name={item.icon} type={'font-awesome'} size={25}/>}
                height= {60}
                // onPress={() => {
                //     this._handleClick(item.title)
                //   }
                // }
                // keyExtractor={item => item.title}
              />
            ))
          }
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
  contentContainer: {
    paddingTop: 30,
  }
});

export default JobInfoPage;
