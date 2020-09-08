import React from 'react';
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Notifications() {
  function Item({text, id}) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{text}</Text>
      </View>
    )
  }

  const Data = [{
    id: "0",
    text: "Your state congress representative is about to vote on Bill 101! See the livestream/ place your vote in the survey/ follow this legislator's voting record."
  },
  {
    id: "1",
    text: "Your senator is scheduled to vote for a bill you bookmarked. Send them an email to make your voice heard."
  },
  {
    id: "2",
    text: "We noticed your house representative is voting against your preferences a lot. Here is a challenger you can support in the upcoming election on April 22nd!"
  }
]

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={Data}
        renderItem={({item}) => (
          <Item
            text={item.text}
            id={item.id}
            key={item.id}
          />
        )}
      />
    </View>
  );
}

export function NotificationsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notifications" component={Notifications}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 15,
  },
  containertwo: {
    flex: 1,
  },
  title: {
    flex: 1,
    fontSize: 14,
    color: "#fff",
  },
});
