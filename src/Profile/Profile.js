import "react-native-gesture-handler";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";
import React, { Component, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  TouchableHighlight,
  FlatList
} from "react-native";

export function YourProfile({ navigation }) {
  const DATA = [
    {
      id: "1",
      title: "First Item"
    },
    {
      id: "2",
      title: "Second Item"
    },
    {
      id: "3",
      title: "Third Item"
    },
    {
      id: "4",
      title: "Fourth Item"
    },
    {
      id: "5",
      title: "Fifth Item"
    },
    {
      id: "6",
      title: "Sixth Item"
    },
    {
      id: "7",
      title: "Seventh Item"
    },
    {
      id: "8",
      title: "Eigth Item"
    },
    {
      id: "9",
      title: "Ninth Item"
    },
    {
      id: "10",
      title: "Tenth Item"
    },
    {
      id: "11",
      title: "Eleventh Item"
    },
    {
      id: "12",
      title: "Twelveth Item"
    }
  ];

  function Item({ title }) {
    return (
      <GestureRecognizer onSwipeRight={() => onSwipeRight()}>
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </GestureRecognizer>
    );
  }

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  function onSwipeRight() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.containertwo}>
      <GestureRecognizer
        style={styles.container}
        onSwipeRight={() => onSwipeRight()}
      >
        <View>
          <Image
            style={styles.bannerimage}
            source={require("../../assets/boulder.jpeg")}
          />
          <Image
            style={styles.profilepic}
            source={require("../../assets/profilepic.jpeg")}
          />
          <TouchableHighlight style={styles.button}>
            <Button title="Edit Profile" />
          </TouchableHighlight>
        </View>
      </GestureRecognizer>
      
      <FlatList
        style={{ flex: 1 }}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerimage: {
    flex: .6
  },
  profilepic: {
    borderRadius: 50,
    flex: 1,
    position: "absolute",
    margin: 25,
    marginTop: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 100,
    width: 100
  },
  container: {
    flex: .8,
    backgroundColor: "#243447",
    // alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'center',
    // justifyContent: "space-around",
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  containertwo: {
    flex: 1
  },
  item: {
    backgroundColor: "#243447",
    padding: 20,
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  textInput: {
    backgroundColor: "#fff",
    height: 40,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    width: 200
  },
  title: {
    flex: 0.6,
    fontSize: 46,
    color: "#fff"
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#3399FF",
    alignSelf: "flex-end",
    width: 110,
    margin: 25
  }
});