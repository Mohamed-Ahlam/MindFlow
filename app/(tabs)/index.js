import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { Provider as PaperProvider, Appbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

// HOME PAGE AND ROOT LAYOUT

export default function Home() {

// const [fontsLoaded] = useFonts({
//   "Epilogue-Regular": require("../../assets/fonts/Epilogue-Regular.ttf"),
//   "Epilogue-Bold": require("../../assets/fonts/Epilogue-Bold.ttf"),
// });
//    if (!fontsLoaded) {
//      return <AppLoading />;
//    }


  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <Header />
        <Main />
      </View>
    </PaperProvider>
  );
}
