import "react-native-gesture-handler";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";
import React, { Component, useState, useReducer } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  FlatList
} from "react-native";
import { Candidate } from '../Candidate/Candidate';
import { reducer, initialState } from '../../utils/reducer';

const Stack = createStackNavigator();


function YourRegion({navigation, route}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(route)
  // console.log(state.elections.countywide)
  function Item({ title }) {
    return (
      <TouchableHighlight onPress={() => navigation.navigate("Candidate")}>
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
        data={state.elections[route.name]}
        renderItem={({ item }) => <Item title={item.office} />}
      />
    </View>
  );
}

export function RegionStack({ navigation: { goBack }, route }) {
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
        <Stack.Screen name={route.params.scope} component={YourRegion} initialParams={route.params}/>
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