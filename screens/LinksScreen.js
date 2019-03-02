import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { ListItem } from 'react-native-elements'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  

  render() {
    const list = [
      {
        title: 'Appointments',
        icon: 'av-timer'
      },
      {
        title: 'Trips',
        icon: 'flight-takeoff'
      },
    ]

    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        {/* <ExpoLinksView /> */}
        <View>
         {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
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
  },
});
