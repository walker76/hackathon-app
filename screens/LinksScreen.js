import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {

    const list = [
      {
        title: 'Food',
        icon: 'cutlery'
      },
      {
        title: 'Handy Man',
        icon: 'wrench'
      },
      {
        title: 'Company',
        icon: 'heart'
      },
      {
        title: 'Driver',
        icon: 'car'
      },
      {
        title: 'Professional',
        icon: 'black-tie'
      },
      {
        title: 'Recreation',
        icon: 'bicycle'
      },
    ]

    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        {/* <ExpoLinksView /> */}
        <View style={styles.container}>
         {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                titleContainerStyle={styles.titleContainerStyle}
                leftIcon = {<Icon name={item.icon} type={'font-awesome'} size={25}/>}
                height= {60}
              />
            ))
          }
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    fontSize: 70,
  },
  titleContainerStyle: {
    fontSize: 70,
  },
});
