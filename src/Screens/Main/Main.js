import "react-native-gesture-handler";
import React, { useEffect, useReducer, useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { fetchMethod, addVoted } from "../../utils/fetch";
import { reducer, initialState } from "../../utils/reducer";
import { HomeScreen } from '../Home/Home';
import { Icon } from 'react-native-elements';
import { NotificationsStack } from '../Notifications/Notifications';
import AuthContext from "../../../AuthContext";

const Tab = createBottomTabNavigator();

const MyTheme = {
  dark: true,
  colors: {
    primary: "white",
    background: "#1B2737",
    card: "#243447",
    text: "white",
    border: "gray",
  },
};

export default function MainScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!state.elections.length) {
      const getElections = async () => {
        const data = await fetchMethod(user.address);
        const elections = addVoted(data.contests);
        dispatch({ type: "setElections", data: elections });
      };
      getElections();
    }
  }, [fetchMethod, reducer]);

  return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
        // initialRouteName={("Main", { screen: "Home" })}
      >
        <Tab.Screen
          name="Home"
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
  );
}