import "react-native-gesture-handler";
import React, { useReducer, useState, useRef } from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import { DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Icon } from "react-native-elements";
import { Candidate } from '../Candidate/Candidate';
import { reducer, initialState } from '../../utils/reducer';

const Stack = createStackNavigator();


function YourRegion({navigation, route}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  function CandidateItem ({candidate}) {
    return (
      <View>
        <TouchableHighlight onPress={() => navigation.navigate("Candidate")}>
          <Text style={styles.paragraph}>{candidate.name}</Text>
        </TouchableHighlight>
      </View>
    );
  }

  function Item({ title, candidates }) {
    const [itemToggle, setItemOpen] = useState(false)
    const itemAnim = useRef(new Animated.Value(0)).current;
    const drawerOpen = () => {
      setItemOpen(!itemToggle);
        Animated.spring(itemAnim, {
          toValue: !itemToggle ? 1 : 0,
          mass: .5,
          restSpeedThreshold: 90,
          overshootClamping: true
        }).start();
    }

    const heightR = itemAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 120]
    })

    return (
      <View style={[styles.item, itemToggle && { backgroundColor: "#213247" }]}>
        <TouchableOpacity style={{ flex: 0 }} onPress={drawerOpen}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        <Animated.FlatList
          style={{ flex: 1, height: heightR, opacity: itemAnim }}
          data={candidates}
          renderItem={({ item }) => (
            <CandidateItem candidate={item} id={item.id} key={item.id} />
          )}
        />
      </View>
    );
  }

  const Data = [
          "- driver's license, id, or passport" ,
          "- proof of residence in the form of a bill" ,
          "- AND a social security card",
  ]

  return (
    <View style={{flex: 1}}>
      <GestureRecognizer
        config={{
          detectSwipeUp: false,
          detectSwipeDown: false,
          detectSwipeRight: false,
        }}
        onSwipeRight={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <View style={{ backgroundColor: "#243447", padding: 20 }}>
          <Text style={styles.paragraph}>
            Your city's elections will be held on Monday, April the 15th, 2020.
            Polls will be open from 8am - 5pm. Don't forget to set a reminder.
          </Text>
          <Text style={styles.paragraph}>
            Your city will require that you bring these forms of id:
          </Text>
          <FlatList
            style={styles.paragraph}
            data={Data}
            renderItem={({ item }) => (
              <Text style={styles.paragraph}>{item}</Text>
            )}
          />
        </View>
        </GestureRecognizer>
        <FlatList
          style={{ paddingTop: 15, flex: 1 }}
          data={state.elections[route.name]}
          renderItem={({ item }) => <Item title={item.office} candidates={item.candidates} id={item.id} key={item.id}/>}
        />
    </View>
  );
}

export function RegionStack({ navigation: { goBack }, route }) {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerLeft: () => (
            <TouchableHighlight
              style={styles.backButton}
              onPress={() => goBack()}
            >
              <Icon name="keyboard-arrow-left" color="white" size={35}>
                back  
              </Icon>
            </TouchableHighlight>
          ),
        }}
      >
        <Stack.Screen
          name={route.params.scope}
          component={YourRegion}
          initialParams={route.params}
        />
        <Stack.Screen
          name="Candidate"
          component={Candidate}
          options={{ headerShown: false, tabBarVisible: false }}
        />
      </Stack.Navigator>
    </View>
  );
}

// council also appoints the city secretary, city attorney, city auditor, municipal court judges and residents who serve on city boards and commissions.

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#243447",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  containertwo: {
    flex: 1,
  },
  item: {
    backgroundColor: "#243447",
    padding: 20,
    borderRadius: 2,
    borderBottomColor: "#36454f",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  paragraph: {
    fontSize: 13,
    color: "#fff",
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 3,
  },
});