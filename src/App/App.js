import "react-native-gesture-handler";
import React, { useEffect, useReducer } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
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
    background: "#1B2737",
    card: "#243447",
    text: "white",
    border: "gray",
  },
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