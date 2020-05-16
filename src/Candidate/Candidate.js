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
      <View style={styles.container}>
        <Text style={styles.subheader}>On The Issues:</Text>
        <FlatList
          style={styles.paragraph}
          data={Data}
          renderItem={({ item }) => (
            <Text style={styles.paragraph}>{item}</Text>
          )}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.subheader}>Voting Record</Text>
        <FlatList
          style={styles.paragraph}
          data={Data2}
          renderItem={({ item }) => (
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.item}>{item}</Text>
              <Text style={styles.appendix}>?</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  image: {
    height: 400,
    flex: 1,
    width: null,
  },
  button: {
    position: "absolute",
    margin: 20,
  },
  subheader: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "400",
  },
  title: {
    fontSize: 32,
    color: "#fff",
  },
  paragraph: {
    fontSize: 13,
    color: "#fff",
    lineHeight: 18,
    fontWeight: "300",
  },
  item: {
    fontSize: 22,
    paddingRight: 30,
    paddingLeft: 2,
    color: "#fff",
  },
  appendix: {
    color: "#fff",
    position: "absolute",
    marginLeft: 150,
    alignSelf: "center",
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
});