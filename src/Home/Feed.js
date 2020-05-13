import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";

export function Feed() {

  const feedData = [
    {
      'user': 'Ilana',
      'pic': '../../assets/profilepic2.jpeg',
      'text': 'Hey! Is anyone interested in getting a group together to go vote?',
      'id': '0'
    },
    {
      'user': 'Abby',
      'pic': '../../assets/profilepic3.jpeg',
      'text': 'I forgot. When are our mail-in ballots due?',
      'id': '1'
    },
    {
      'user': 'Yourcity.gov',
      'pic': '../../assets/city_hall.jpg',
      'text': 'We`ve updated the times and locations for our upcoming election. See below. :)',
      'id': '2'
    }
  ]

  function FeedItem({content}) {
    return (
      <View
        style={styles.feedItem}
        >
        <Text>{content.user}</Text>
        {/* <Image source={require($`{content.pic}`)}/> */}
        <Text style={{ color: "white" }}>{content.text}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={feedData}
      renderItem={({ item }) => (
        <FeedItem content={item} key={item.id} id={item.id} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  feedItem: {
    flex: 1,
    backgroundColor: "#243447",
    borderColor: "black",
    borderWidth: StyleSheet.hairlineWidth,
  },
});