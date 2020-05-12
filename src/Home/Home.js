import "react-native-gesture-handler";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import React, { Component, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import { YourProfile } from "../Profile/Profile";
import { CityStack } from "../City/City";
import { StateStack } from '../State/State';
import { CountyStack } from '../County/County';
import { CountryStack } from '../Country/Country';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeContent() {
  const navigation = useNavigation();
  return (
    <GestureRecognizer style={{flex: 1}}
      onSwipeRight={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <View style={styles.containertwo}>
        <Text style={styles.title}>Hello</Text>
      </View>
    </GestureRecognizer>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#243447"
        },
        headerTintColor: "#fff"
      }}
    >
      <Stack.Screen name="Feed" component={HomeContent} />
    </Stack.Navigator>
  );
}

export function HomeScreen() {
  return (
    <Drawer.Navigator drawerType="slide">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Your Profile" component={YourProfile} />
      <Drawer.Screen name="Your City" component={CityStack} />
      <Drawer.Screen name="Your County" component={CountyStack} />
      <Drawer.Screen name="Your State" component={StateStack} />
      <Drawer.Screen name="Your Country" component={CountryStack} />
    </Drawer.Navigator>
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