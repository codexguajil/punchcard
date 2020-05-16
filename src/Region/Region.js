import "react-native-gesture-handler";
import React, { useReducer } from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import { DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  FlatList
} from "react-native";
import { Candidate } from '../Candidate/Candidate';
import { reducer, initialState } from '../../utils/reducer';

const Stack = createStackNavigator();


function YourRegion({navigation, route}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  function Item({ title }) {
    return (
        <TouchableHighlight onPress={() => navigation.navigate("Candidate")}>
          <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </TouchableHighlight>
    );
  }

  const Data = [
          "- driver's license, id, or passport" ,
          "- proof of residence in the form of a bill" ,
          "- AND a social security card",
  ]

  return (
    <GestureRecognizer
      style={{ flex: 1 }}
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
          renderItem={({item}) => <Text style={styles.paragraph}>{item}</Text>}
        />
      </View>
      <FlatList
        style={{ paddingTop: 15 }}
        data={state.elections[route.name]}
        renderItem={({ item }) => <Item title={item.office} />}
      />
    </GestureRecognizer>
  );
}

export function RegionStack({ navigation: { goBack }, route }) {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerLeft: () => (
            <Button title="<" onPress={() => goBack()} />
          )
        }}
      >
        <Stack.Screen name={route.params.scope} component={YourRegion} initialParams={route.params}/>
        <Stack.Screen name="Candidate" component={Candidate} options={{headerShown: false, tabBarVisible: false}} />
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
  paragraph: {
    fontSize: 13,
    color: "#fff"
  },
  title: {
    fontSize: 24,
    color: '#fff'
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 3
  }
});