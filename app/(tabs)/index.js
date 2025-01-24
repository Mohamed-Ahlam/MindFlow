import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { Provider as PaperProvider, Appbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

export default function Home() {

  return (
    <PaperProvider>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <StatusBar style="dark" />
          <Header />
          <Main />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
