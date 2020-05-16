import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { Image } from "react-native-elements";

export function Feed() {

  const feedData = [
    {
      'user': 'Daniel',
      'pic': require('../../assets/profilepic2.jpeg'),
      'text': 'Hey! Is anyone interested in getting a group together to go vote on Friday?',
      'id': '0'
    },
    {
      'user': 'Abby',
      'pic': require('../../assets/profilepic3.jpeg'),
      'text': 'I forgot. When is the last day to send the mail-in ballots?',
      'id': '1'
    },
    {
      'user': 'Yourcity.gov',
      'pic': require('../../assets/city_hall.jpg'),
      'text': 'We`ve updated the times and locations for our upcoming election. See below. :)',
      'id': '2'
    }
  ]

  function FeedItem({content}) {
    return (
      <View style={styles.feedItem}>
        <Image
          source={content.pic}
          style={{ height: 40, width: 40, borderRadius: 20, marginRight: 10 }}
        />
        <View style={{flex: 1}}>
          <Text style={styles.username}>{content.user}</Text>
          <Text style={{ color: "white" }}>{content.text}</Text>
        </View>
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
    borderColor: "#14171A",
    borderBottomWidth: 0.19,
    borderTopWidth: 0.19,
    padding: 15,
    flexDirection: "row",
  },
  username: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});