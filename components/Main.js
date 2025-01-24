import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Mood from './Mood'

const Main = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Good Afternoon, </Text>
        <Text style={styles.titleName}>Name </Text>
      </View>
      <View style={styles.moodContainer}>
        <Text style={{ fontFamily: "Epilogue-Medium", fontSize: 16 }}>How are you feeling today?</Text>
        <Mood />
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
});

export default Main;
