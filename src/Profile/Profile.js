import "react-native-gesture-handler";
import GestureRecognizer from "react-native-swipe-gestures";
import React, { useReducer } from "react";
import { DrawerActions } from "@react-navigation/native";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  FlatList
} from "react-native";
import { Icon } from "react-native-elements";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { reducer, initialState } from '../../utils/reducer';

const Tab = createMaterialTopTabNavigator();

function Item({ title, id, name, voted, dispatch }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      {voted ? (
        <Icon
          reverse
          reverseColor="lightblue"
          color="lightblue"
          name="checkbox-blank-circle-outline"
          type="material-community"
          size={12}
          onPress={() => dispatch({ type: "toggleVote", id: id, name: name })}
        />
      ) : (
        <Icon
          reverse
          reverseColor="gray"
          color="gray"
          name="checkbox-blank-circle-outline"
          type="material-community"
          size={12}
          onPress={() => dispatch({ type: "toggleVote", id: id, name: name })}
        />
      )}
    </View>
  );
}

function City() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View 
      style={{ 
        flex: 1, 
        borderTopWidth: StyleSheet.hairlineWidth, 
        borderTopColor: 'gray' 
      }}
    >
      <FlatList
        style={{ flex: 1 }}
        data={state.elections.citywide}
        renderItem={({ item }) => (
          <Item
            title={item.office}
            voted={item.voted}
            key={item.id}
            id={item.id}
            name="citywide"
            dispatch={dispatch}
          />
        )}
      />
    </View>
  );
}

function State() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View 
      style={{
        flex: 1, 
        borderTopWidth: StyleSheet.hairlineWidth, 
        borderTopColor: 'gray' 
      }}
    >
      <FlatList
        style={{ flex: 1 }}
        data={state.elections.statewide}
        renderItem={({ item }) => (
          <Item
            title={item.office}
            voted={item.voted}
            key={item.id}
            id={item.id}
            name="statewide"
            dispatch={dispatch}
          />
        )}
      />
    </View>
  );
}

function Country() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View
      style={{
        flex: 1,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: "gray",
      }}
    >
      <FlatList
        style={{ flex: 1 }}
        data={state.elections.nationwide}
        renderItem={({ item }) => (
          <Item
            title={item.office}
            voted={item.voted}
            key={item.id}
            id={item.id}
            name="nationwide"
            dispatch={dispatch}
          />
        )}
      />
    </View>
  );
}

function County() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{
          flex: 1,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: "gray",
        }}
        data={state.elections.countywide}
        renderItem={({ item }) => (
          <Item
            title={item.office}
            voted={item.voted}
            key={item.id}
            id={item.id}
            name="countywide"
            dispatch={dispatch}
          />
        )}
      />
    </View>
  );
}

function TopTabs() {
  return (
    <View style={{ flex: 1 }}>
        <Tab.Navigator>
          <Tab.Screen 
            name="City" 
            component={City} 
          />
          <Tab.Screen
            name="County"
            component={County}
          />
          <Tab.Screen
            name="State"
            component={State}
          />
          <Tab.Screen
            name="Country"
            component={Country}
          />
        </Tab.Navigator>
    </View>
  );
}

export function YourProfile({ navigation }) {
  return (
    <View style={styles.containertwo}>
      <GestureRecognizer
        style={styles.container}
        onSwipeRight={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <View>
          <Image
            style={styles.bannerimage}
            source={require("../../assets/boulder.jpeg")}
          />
          <TouchableHighlight style={styles.backButton} onPress={() => navigation.goBack()} >
            <Icon name="keyboard-arrow-left" color="white" size={35}>back</Icon>
          </TouchableHighlight>
          <Image
            style={styles.profilepic}
            source={require("../../assets/profilepic.jpeg")}
          />
          <Text
            style={{
              alignSelf: "flex-end",
              color: "#3399FF",
              marginRight: 25,
              margin: 10,
              fontSize: 20,
            }}
          >
            Grade: 80%
          </Text>
          <TouchableHighlight style={styles.button}>
            <Text
              style={{ fontSize: 15, color: "#3399FF", fontWeight: "normal" }}
            >
              Edit Profile
            </Text>
          </TouchableHighlight>
        </View>
      </GestureRecognizer>
      <TopTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerimage: {
    flex: .95
  },
  profilepic: {
    borderRadius: 55,
    flex: 1,
    position: "absolute",
    margin: 25,
    marginTop: 65,
    height: 110,
    width: 110
  },
  container: {
    flex: .6,
    backgroundColor: "#243447",
    flexDirection: "row",
    justifyContent: 'center',
  },
  containertwo: {
    flex: 1
  },
  item: {
    flexDirection: 'row',
    backgroundColor: "#243447",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
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
    flex: 1,
    fontSize: 14,
    color: "#fff"
  },
  button: {
    borderWidth: .5,
    borderRadius: 10,
    borderColor: "#3399FF",
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "flex-end",
    height: 35,
    width: 96,
    marginRight: 30,
    marginBottom: 20
  },
  backButton: {
    position: 'absolute',
    margin: 15,
    flex: 1
  }
});