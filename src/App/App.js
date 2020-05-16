import "react-native-gesture-handler";
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import React, { useEffect, useReducer } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image } from 'react-native';
import { fetchMethod, addId } from "../../utils/fetch";
import { reducer, initialState } from "../../utils/reducer";
import { HomeScreen } from '../Home/Home';
import { Icon } from 'react-native-elements';
import { NotificationsStack } from '../Notifications/Notifications';

const Tab = createBottomTabNavigator();

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
  
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.elections.length) {
      const getElections = async () => {
        const data = await fetchMethod();
        const elections = addId(data.contests);
        dispatch({ type: "setElections", data: elections });
      };
      getElections();
    }
  }, [fetchMethod, reducer]);

  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
        initialRouteName={("Main", { screen: "Home" })}
      >
        <Tab.Screen
          name="Main"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Icon
                name="home"
                color="white"
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsStack}
          options={{
            tabBarIcon: () => (
              <Icon
                name="notifications"
                color="white"
                size={30}
              />
            ),
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