import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { ListItem, Icon } from 'react-native-elements'

export default class JobListItem extends React.Component {

  constructor(props){
    super(props);
    console.log("Constructing JobListItem ", this.props.itemKey );
    this.state = {
        item: this.props.item
    }
  }

  componentWillMount(){
    let url = "https://wacode-hackathon-api.herokuapp.com/job/findById/" + this.props.itemKey;
    fetch(url)
    .then(response => {
        console.log(response);
      return response.json();
    }).then(responseJSON => {
      console.log(responseJSON);
      this.setState({
        item: responseJSON
      }, () => console.log(this.state.item));
    }).catch(err => {
      console.error(err);
    });
  }

  render() {
    if(this.state.item === undefined){
        return <View></View>
    }

    return (
        <ListItem
        key={this.state.item.title}
        title={this.state.item.title}
        titleContainerStyle={styles.titleContainerStyle}
        rightIcon = {<Icon name={'chevron-right'} type={'font-awesome'} size={25}/>}
        height= {60}
        onPress={() => {
            this.props.handleClick(this.state.item.id)
          }
        }
        keyExtractor={item => item.title}
    /> );
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