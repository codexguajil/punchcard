import "react-native-gesture-handler";
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Home/Home';
import { decode, encode } from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

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
  

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        { user ? (
          <Stack.Screen name="Main">
            {props => <MainScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              name="Registration"
              component={RegistrationScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}