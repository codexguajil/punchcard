import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  FlatList,
  ScrollView
} from "react-native";

export function Candidate({navigation}) {
  const Data = [
    "Healthcare - Public over private",
    "Economy - End Wall St. subsidies, rejuvenate middle class",
    "Energy - Renewable Energy",
    "Climate - Change is Real",
    "International Relations - Support democracies while working with diverse governments"
  ]

  const Data2 = [
    "Bill 122 - Yes",
    "Bill 303 - No",
    "Bill 101 - Yes",
    "Bill 501 - No"
  ]

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={require("../../assets/profilepic1a.jpg")}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.title}>Back</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    flex: 0.7,
    width: null
  },
  button: {
    position: 'absolute',
    margin: 20
  },
  text: {
    fontSize: 32,
    color: '#fff',
  }
});