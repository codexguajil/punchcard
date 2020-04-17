import "react-native-gesture-handler";
import React, { Component, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableHighlight, FlatList } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function YourProfile() {
  const DATA = [
    {
      id: '1',
      title: "First Item"
    },
    {
      id: '2',
      title: "Second Item"
    },
    {
      id: '3',
      title: "Third Item"
    },
    {
      id: '4',
      title: "Fourth Item"
    },
    {
      id: '5',
      title: "Fifth Item"
    },
    {
      id: '6',
      title: "Sixth Item"
    },
    {
      id: '7',
      title: "Seventh Item"
    },
    {
      id: '8',
      title: "Eigth Item"
    },
    {
      id: '9',
      title: "Ninth Item"
    },
    {
      id: '10',
      title: "Tenth Item"
    },
    {
      id: '11',
      title: "Eleventh Item"
    },
    {
      id: '12',
      title: "Twelveth Item"
    },
  ];

  function Item({title}) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }

  return (
    <View style={styles.containertwo}>
      <View style={styles.container}>
        <Text style={styles.title}>Pri</Text>
      </View>
      <FlatList
        style={{flex:2}}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title}/>}
      >
      </FlatList>
    </View>
  );
}

function YourCity({ navigation }) {
  return (
    <View>
      <Text style={styles.title}>Your City Goes Here</Text>
    </View>
  );
}

function CityStack({ navigation }) {

  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#243447"
          },
          headerLeft: () => (
            <Button title="<" onPress={() => navigation.navigate("Home")} />
          ),
          headerTintColor: "#fff"
        }}
      >
        <Stack.Screen name="Your City" component={YourCity} />
      </Stack.Navigator>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

function CityScreen() {
  return (
    <Tab.Navigator
      initialRouteName="YourCity"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#243447"
        },
        headerTintColor: "#fff"
      }}
    >
      <Tab.Screen name="Home" component={HomeContent} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

function ProfileScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  )
}

function Notifications() {
  return (
    <View>
      <Text style={styles.title}>hi</Text>
    </View>
  );
}

function HomeContent() {
  return (
    <View style={styles.containertwo}>
      <Text style={styles.title}>Hello</Text>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#243447"
        },
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen
        name="Feed"
        component={HomeContent}
      />
    </Stack.Navigator>
  )
}

function HomeScreen() {
  return (
  <Tab.Navigator>
      <Tab.Screen 
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen name="Notifications" component={Notifications} />
  </Tab.Navigator>
  )
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

export default function App() {
  const ref = React.useRef(null);

  return (
      <NavigationContainer ref={ref} theme={MyTheme}>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#243447'
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          />
        <Drawer.Screen
          name="Profile"
          component={YourProfile}
        />
        <Drawer.Screen
          name="YourCity"
          component={CityStack}
        />
      </Drawer.Navigator>
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
    // flexDirection: "column"
  },
  item: {
    backgroundColor: "#243447",
    padding: 20,
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth
    // marginHorizontal: 16
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
