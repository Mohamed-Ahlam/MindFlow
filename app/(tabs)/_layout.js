import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";

import Header from "../../components/Header";

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <Header />
      {/* screenOptions makes it so all the tabs.screen have the same style of no header */}
      <Tabs screenOptions={{ tabBarActiveTintColor: "#FE8235", headerShown: false }}>
        <Tabs.Screen
          name="(home)/index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="community"
          options={{
            title: "Community",
            tabBarIcon: ({ color }) => <FontAwesome size={20} name="users" color={color} />,
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