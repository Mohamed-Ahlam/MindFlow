import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Main = () => {
  return (
    <View>
      <View style={styles.containerHeaderTitle}>
        <Text style={styles.titleText}>Good Afternoon, </Text>
        <Text style={styles.titleName}>Name </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeaderTitle: {
    display: "flex",
    flexDirection: "column",
    padding: 19,
    alignItems: "flex-start",

    backgroundColor: "#FBFBFB", // delete later and add theme
  },
  titleText: {
    fontFamily: "Epilogue-Regular",
    fontSize: 26,
  },
  titleName: {
    fontFamily: "Epilogue-Bold",
    fontSize: 26,
  },
});

export default Main;
