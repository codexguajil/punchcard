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
import { Candidate } from '../Candidate/Candidate';

const Stack = createStackNavigator();

function YourCity({navigation}) {

  const Data = [
    {
      id: "1",
      title: "Cynthia Lee",
      img: "../../assets/profilepic1.jpeg"
    },
    {
      id: "2",
      title: "Berger Bohm",
      img: "../../assets/profilepic2.jpeg"
    },
    {
      id: "3",
      title: "Anna Korber",
      img: "../../assets/profilepic3.jpeg"
    }
  ]

  function Item({title}) {
    return (
      <TouchableHighlight
            onPress={() => navigation.navigate("Candidate")}
          >
          <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            </View>
      </TouchableHighlight>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#243447", padding: 20 }}>
        <Text style={styles.paragraph}>
          Your city's elections will be held on Monday, April the 15th, 2020.
          Polls will be open from 8am - 5pm. Don't forget to set a reminder.
        </Text>
        <Text style={styles.paragraph}>
          Your city will require that you bring these forms of id: - driver's
          license, id, or passport - proof of residence in the form of a bill -
          AND a social security card
        </Text>
      </View>
      <FlatList
        style={{ paddingTop: 15 }}
        data={Data}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </View>
  );
}

export function CityStack({ navigation: { goBack } }) {
         return (
           <View style={{ flex: 1 }}>
             <Stack.Navigator
               initialRouteName="Your City"
               screenOptions={{
                 headerLeft: () => (
                   <Button title="<" onPress={() => goBack()} />
                 )
               }}
             >
               <Stack.Screen name="Your City" component={YourCity} />
               <Stack.Screen name="Candidate" component={Candidate} options={{headerShown: false, tabBarVisible: false}} />
             </Stack.Navigator>
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
  paragraph: {
    fontSize: 13,
    color: "#fff"
  },
  title: {
    fontSize: 24,
    color: '#fff'
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 3
  }
});