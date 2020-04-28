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
          <Text style={styles.title}>Pri</Text>
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
  container: {
    flex: 0.5,
    backgroundColor: "#243447",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth
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
    fontSize: 46,
    color: "#fff"
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 3
  }
});