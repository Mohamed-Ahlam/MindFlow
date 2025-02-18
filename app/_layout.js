import { Stack } from "expo-router";

// Handles Routing & Authentication  //

export default function RootLayout() {
  return (
    // screenOptions makes it so all the tabs.screen have the same style of no header
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(login)" />
    </Stack>
  );
}


/* 

Login page

qs 
- in layout what 
- how would login 


*/