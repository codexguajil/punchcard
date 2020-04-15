import "react-native-gesture-handler";
import React, { Component, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [text, setText] = useState("");
  return (
    <View style={styles.containertwo}>
      <Text style={styles.title}>Punchcard</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Hello, type in here"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <TextInput style={styles.textInput} />
      <View style={styles.container}>
        <TouchableHighlight style={styles.button}>
          <Button
            onPress={() => {
              alert("You tapped the button!");
            }}
            title="Register"
            type="outline"
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
            <Button
              title="Log In"
              onPress={() => navigation.navigate('Root')}
            />
        </TouchableHighlight>
      </View>
    </View>
  );
}

function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Register</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home" mode="modal">
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen 
          name="Root" 
          component={Root}
           />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

function Root() {
  return (
      <RootStack.Navigator>
        <RootStack.Screen 
          name="Register" 
          options={{ headerShown: false }}
          component={ModalScreen} />
      </RootStack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containertwo: {
    flex: 2,
    backgroundColor: "#cbd097",
    padding: 125,
    alignItems: "center",
    justifyContent: "space-between"
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
    color: "#fff",
    width: 215
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 3
  }
});
