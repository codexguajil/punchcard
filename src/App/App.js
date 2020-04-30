import "react-native-gesture-handler";
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import React, { Component, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity, FlatList, Image } from 'react-native';
import { YourProfile } from '../Profile/Profile';
import { CityStack } from '../City/City';
import { HomeScreen } from '../Home/Home';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Notifications() {
  return (
    <View>
      <Text style={styles.title}>hi</Text>
    </View>
  );
}

const MyTheme = {
  dark: true,
  colors: {
    primary: "white",
    background: "#101820",
    card: "#243447",
    text: "white",
    border: "gray"
  }
};

export default function App({ navigation }) {

  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false
        }}
        initialRouteName={("Main", { screen: "Home" })}
      >
        <Tab.Screen
          name="Main"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Image source={require("../../assets/home.png")} />
            )
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../../assets/bell.png")}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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