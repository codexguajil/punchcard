import "react-native-gesture-handler";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";
import React, { useEffect, useReducer } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  FlatList
} from "react-native";
import { fetchMethod } from "../../utils/fetch";

export function YourProfile({ navigation }) {
  const initialState = {elections: []};
  const [state, dispatch] = useReducer(reducer, initialState)

  function Item({ title }) {
    return (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
    );
  }

  const rowItems = [
    { id: "1", title: "City" },
    { id: "2", title: "County" },
    { id: "3", title: "State" },
    { id: "4", title: "Country" },
  ];

  function reducer(state, action) {
    switch (action.type) {
      case 'toggleVote':
        state.elections.forEach((election, id) => {
          if (id === action.id) {
            !election.voted
          }
        })
        return {elections: state.elections};
      case 'setElections':
        return {elections: action.data};
      default:
        throw new Error();
    }
  }

  useEffect(() => {
    if(!state.elections.length) {
      const getElections = async () => {
        const data = await fetchMethod()
        dispatch({ type: "setElections", data: data.contests });
      }
      getElections()
    }
  }, [fetchMethod])

  return (
    <View style={styles.containertwo}>
      <GestureRecognizer
        style={styles.container}
        onSwipeRight={() => onSwipeRight()}
      >
        <View>
          <Image
            style={styles.bannerimage}
            source={require("../../assets/boulder.jpeg")}
          />
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
          <FlatList
            style={{
              flexGrow: 0,
            }}
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
            data={rowItems}
            renderItem={({ item }) => (
              <Text
                style={{ color: "#3399FF", fontWeight: "bold", padding: 3 }}
              >
                {item.title}
              </Text>
            )}
          />
        </View>
      </GestureRecognizer>
       <FlatList
        style={{ flex: 1 }}
        data={state.elections}
        renderItem={({ item }) => <Item title={item.office} />}
        keyExtractor={(item, index) => 'key' + index}
      />
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
    flex: .7,
    backgroundColor: "#243447",
    flexDirection: "row",
    justifyContent: 'center',
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  containertwo: {
    flex: 1
  },
  item: {
    backgroundColor: "#243447",
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
    flex: 0.6,
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
    marginBottom: 25
  }
});