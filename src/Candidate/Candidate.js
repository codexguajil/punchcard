import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  TouchableHighlight,
  FlatList,
  Image,
  StatusBar
} from "react-native";

export function Candidate({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <Image resizeMode="cover" style={styles.image} source={require("../../assets/profilepic1a.jpg")} />
      <TouchableHighlight style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Back</Text>
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