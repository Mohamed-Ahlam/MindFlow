import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Mood from './Mood'
import FontAwesome from "@expo/vector-icons/FontAwesome";


const Main = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Good Afternoon, </Text>
        <Text style={styles.titleName}>Ahlam! </Text>
      </View>
      <View style={styles.moodContainer}>
        <Text style={{ fontFamily: "Epilogue-Medium", fontSize: 16 }}>
          How are you feeling today?
        </Text>
        <Mood />
        <View style={styles.sessionContainer}>
          <View style={styles.insideSessionContainer}>
            <Text style={{ fontFamily: "Epilogue-ExtraBold", fontSize: 22, fontWeight: 700 }}>
              1 on 1 Sessions
            </Text>
            <Text
              style={{
                fontFamily: "Epilogue-Regular",
                fontSize: 12,
                width: 200,
                textAlign: "left",
                wordWrap: "break-word",
                marginBottom: 20
              }}
            >
              Let’s open up to the things that matter the most
            </Text>
            <Text style={{ fontFamily: "Epilogue-Bold", fontSize: 16, color: "#FE8235" }}>
              Book Now <FontAwesome size={15} name="calendar" color="#FE8235" />
            </Text>
          </View>
          <Image
            source={require("../assets/images/meetupicon.jpg")}
            style={{ width: 85.27, height: 80 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 19,
    alignItems: "flex-start",

    backgroundColor: "#FBFBFB", // delete later and add theme
  },
  titleText: {
    fontFamily: "Epilogue-Medium",
    fontSize: 26,
  },
  titleName: {
    fontFamily: "Epilogue-Bold",
    fontSize: 26,
  },

  moodContainer: {
    display: "flex",
    alignItems: "flex-start",
    padding: 19,
    paddingRight: 0,
    gap: 10,
    backgroundColor: "#FBFBFB", // delete later and add theme
  },

  sessionContainer: {
    backgroundColor: "#FEF3E7",
    padding: 30,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    gap: 5,
  },
  insideSessionContainer:{
    display: 'flex',
    gap: 10
  }
});

export default Main;
