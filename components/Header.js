import React from "react";
import { View, StyleSheet } from "react-native";
import Image from "../assets/images/ellipse2.jpg"
import { Appbar, Avatar } from "react-native-paper";

const Header = () => {
  return (
    <Appbar.Header style={styles.header}>
      <Avatar.Image
        size={40}
        source={require("../assets/images/ellipse2.jpg")}
        style={styles.avatar}
      />
      <Appbar.Action icon="bell-badge-outline" size={29} color="#573926" onPress={() => {}} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FBFBFB", // DELETE LATER AND ADD THEME
    justifyContent: "space-between",
    paddingRight: 25,
    paddingLeft: 25,
  },
  avatar: {
    marginRight: 10, // Add some margin to position the avatar nicely
  },
});

export default Header;
