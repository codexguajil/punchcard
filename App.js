import "react-native-gesture-handler";
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, MainScreen, RegistrationScreen } from './src/Screens';
import { Text, View } from 'react-native';
import { decode, encode } from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }
import { firebase } from './src/firebase/config';

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
  
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  // if (loading) {
  //   return (
  //   <></>
  //   )
  // }

  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

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