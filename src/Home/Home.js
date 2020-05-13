import "react-native-gesture-handler";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import React, { Component, useState } from "react";
import { Image } from "react-native-elements";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import { YourProfile } from "../Profile/Profile";
import { RegionStack } from "../Region/Region";

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
          backgroundColor: "#243447",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Feed"
        component={HomeContent}
        options={{
          headerLeft: () => (
            <Image
              source={require("../../assets/profilepic.jpeg")}
              style={styles.headerIcon}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function CustomDrawer(props) {
  // console.log(props.state.routes)
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Your Profile"
        onPress={() => props.navigation.navigate("Your Profile")}
      />
      <DrawerItem
        label="Your City"
        onPress={() => {props.navigation.navigate("Your City", {scope: "countywide"})}}
      />
      <DrawerItem
        label="Your County"
        onPress={() => props.navigation.navigate("Your County", {scope: "countywide"})}
      />
      <DrawerItem
        label="Your State"
        onPress={() => props.navigation.navigate("Your State", {scope: "statewide"})}
      />
      <DrawerItem
        label="Your Country"
        onPress={() => props.navigation.navigate("Your Country", {scope: "nationwide"})}
      />
    </DrawerContentScrollView>
  );
}

export function HomeScreen() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>} drawerType="slide">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Your Profile" component={YourProfile} />
      <Drawer.Screen name="Your City" component={RegionStack} />
      <Drawer.Screen name="Your County" component={RegionStack} />
      <Drawer.Screen name="Your State" component={RegionStack} />
      <Drawer.Screen name="Your Country" component={RegionStack} />
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
  headerIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 15
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