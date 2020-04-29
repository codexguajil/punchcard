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
      <Button title="Go back" onPress={() => navigation.goBack()}/>
      <Image source={require("../../assets/profilepic2.jpeg")} />
    </View>
  );
}