import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";

import Header from "../../components/Header";

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <Header />
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
  container: {
    flex: 1,
  },
});
