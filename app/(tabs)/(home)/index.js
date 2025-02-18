import React from "react";
import { ScrollView } from "react-native";
import Main from "../../../components/Main";

import { Provider as PaperProvider, Appbar } from "react-native-paper";

export default function Home() {
  return (
    // <PaperProvider>
    <ScrollView style={{ flex: 1 }}>
        <Main />
    </ScrollView>
    // </PaperProvider>
  );
}
