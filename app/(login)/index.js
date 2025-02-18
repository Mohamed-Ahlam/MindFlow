import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import LoginPage from "../../components/LoginPage";
import { StatusBar } from "expo-status-bar";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "transparent" }}>
        
        {/* Transparent Status Bar */}
        <StatusBar style="dark" translucent backgroundColor="transparent" />

        <LoginPage />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
