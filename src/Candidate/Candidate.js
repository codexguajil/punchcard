import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Modal
} from "react-native";
import { Icon } from "react-native-elements";

export function Candidate({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const Data = [
    "Healthcare - Public over private",
    "Economy - End Wall St. subsidies, rejuvenate middle class",
    "Energy - Renewable Energy",
    "Climate - Change is Real",
    "International Relations - Support democracies while working with diverse governments"
  ]

  const Data2 = [
    "Bill 122 - Yes",
    "Bill 303 - No",
    "Bill 101 - Yes",
    "Bill 501 - No"
  ]

  const billSummary = [
    "- Funding for science and SAT tutoring for public school students in your district.", 
    "- 1 billion dollars for road repair on Main St.", 
    "- Lowers taxes on families earning less than 230k.",
  ]

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={require("../../assets/profilepic1a.jpg")}
      />
      <TouchableHighlight 
        style={styles.button} 
        onPress={() => navigation.goBack()}>
        <Icon name="keyboard-arrow-left" color="white" size={35}>
          back
        </Icon>
      </TouchableHighlight>
      <View style={{ paddingBottom: 40 }}>
        <View style={styles.container}>
          <Text style={styles.subheader}>On The Issues:</Text>
          <FlatList
            style={styles.paragraph}
            data={Data}
            renderItem={({ item }) => (
              <Text style={styles.paragraph}>{item}</Text>
            )}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.subheader}>Voting Record</Text>
          <FlatList
            style={styles.paragraph}
            data={Data2}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.item}>{item}</Text>
                <TouchableOpacity
                  style={styles.moreBtn}
                  onPress={() => {
                    setModalVisible(true);
                  }}
                >
                  <View style={{ width: 55, height: 25 }}>
                    <Text style={styles.appendix}>?</Text>
                  </View>
                </TouchableOpacity>
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={modalVisible}
                >
                  <TouchableHighlight
                    style={styles.centeredView}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <View style={styles.modalView}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "600",
                          color: "#36454F",
                          marginBottom: 8,
                        }}
                      >
                        Includes:
                      </Text>
                      <FlatList
                        style={{ flexGrow: 0, flex: 0 }}
                        data={billSummary}
                        renderItem={({ item }) => (
                          <Text
                            style={{
                              color: "#414a4c",
                              fontWeight: "500",
                              flex: 1,
                              paddingBottom: 5,
                            }}
                          >
                            {item}
                          </Text>
                        )}
                      />
                    </View>
                  </TouchableHighlight>
                </Modal>
              </View>
            )}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.subheader}>Why you should vote for me</Text>
          <Text style={styles.paragraph}>
            In my duties as a community organizer with ten years of experience I
            prioritized the health and financial well-being of my neighbors. My
            passion for better representation has motivated me to push for
            government transparency with Bill 101 and my extensive experience
            working in ThinkTech International has prepared me to fight for your
            jobs throughout the next industrial revolution.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 155,
  },
  container: {
    padding: 15,
  },
  image: {
    height: 400,
    flex: 1,
    width: null,
  },
  button: {
    position: "absolute",
    marginTop: 20,
  },
  subheader: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "400",
  },
  title: {
    fontSize: 32,
    color: "#fff",
  },
  paragraph: {
    fontSize: 13,
    color: "#fff",
    lineHeight: 18,
    fontWeight: "300",
  },
  item: {
    fontSize: 22,
    paddingRight: 30,
    paddingLeft: 2,
    color: "#fff",
  },
  appendix: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
    alignSelf: "center"
  },
  moreBtn: {
    position: "absolute",
    marginLeft: 150,
    alignSelf: "center",
  },
});