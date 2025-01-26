import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";

import Header from "../../components/Header";

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <Header />
      <Tabs screenOptions={{ tabBarActiveTintColor: "#FE8235" }}>
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="community"
          options={{
            headerShown: false,
            title: "Community",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { // U NEED THIS BC otherwise ur header and tabs will be the only thing showing also Wraps the entire layout with flex: 1 to make sure it takes up the full screen.
    flex: 1,
  },
});