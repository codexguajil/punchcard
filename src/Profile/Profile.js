import "react-native-gesture-handler";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";
import { useAsync } from "react-async";
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
import { fetchMethod } from "../../utils/fetch";

export function YourProfile({ navigation }) {
  const DATA = [
    {
      id: "1",
      title: "State Comptroller",
    },
    {
      id: "2",
      title: "State Attorney General",
    },
    {
      id: "3",
      title: "Governor",
    },
    {
      id: "4",
      title: "Railroad Commissioner",
    },
    {
      id: "5",
      title: "Agriculture Commissioner",
    },
    {
      id: "6",
      title: "Sixth Item",
    },
    {
      id: "7",
      title: "Seventh Item",
    },
    {
      id: "8",
      title: "Eigth Item",
    },
    {
      id: "9",
      title: "Ninth Item",
    },
    {
      id: "10",
      title: "Tenth Item",
    },
    {
      id: "11",
      title: "Eleventh Item",
    },
    {
      id: "12",
      title: "Twelveth Item",
    },
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

  function onSwipeRight() {
    navigation.navigate("Home");
  }

  const rowItems = [
    { id: "1", title: "City" },
    { id: "2", title: "County" },
    { id: "3", title: "State" },
    { id: "4", title: "Country" },
  ];

  const { data, error, isLoading } = useAsync({ promiseFn: fetchMethod });
  if (isLoading) return <Text>"Loading..."</Text>
  if (error) return <Text>{error.message}</Text>;
  if (data)

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
          <Text
            style={{
              alignSelf: "flex-end",
              color: "#3399FF",
              marginRight: 25,
              margin: 10,
              fontSize: 20,
            }}
          >
            Grade: 80%
          </Text>
          <TouchableHighlight style={styles.button}>
            <Text
              style={{ fontSize: 15, color: "#3399FF", fontWeight: "normal" }}
            >
              Edit Profile
            </Text>
          </TouchableHighlight>
          <FlatList
            style={{
              flexGrow: 0,
            }}
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
            data={rowItems}
            renderItem={({ item }) => (
              <Text
                style={{ color: "#3399FF", fontWeight: "bold", padding: 3 }}
              >
                {item.title}
              </Text>
            )}
          />
        </View>
      </GestureRecognizer>
      <FlatList
        style={{ flex: 1 }}
        data={data.contests}
        renderItem={({ item }) => <Item title={item.office} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerimage: {
    flex: .95
  },
  profilepic: {
    borderRadius: 55,
    flex: 1,
    position: "absolute",
    margin: 25,
    marginTop: 65,
    height: 110,
    width: 110
  },
  container: {
    flex: .7,
    backgroundColor: "#243447",
    flexDirection: "row",
    justifyContent: 'center',
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  containertwo: {
    flex: 1
  },
  item: {
    backgroundColor: "#243447",
    padding: 15,
    // alignItems: 'center',
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
    fontSize: 22,
    color: "#fff"
  },
  button: {
    borderWidth: .5,
    borderRadius: 10,
    borderColor: "#3399FF",
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "flex-end",
    height: 35,
    width: 96,
    marginRight: 30,
    marginBottom: 25
  }
});