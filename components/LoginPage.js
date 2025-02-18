import { View, ImageBackground, TextInput, Text, Button, Dimensions, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";


const { width, height } = Dimensions.get("window");

export default function Login() {

  const router = useRouter();
  const handleLogin = () => {
    // Navigate to the index.js file in the (tabs) group
    router.push("/(tabs)");
  };
  
  return (
    <ImageBackground
      source={require("../assets/images/onboarding.jpg")}
      style={{ width: width, height: height }}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#ccc"
          secureTextEntry
        />
        <Pressable title="Login" onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    color: "#EF5DA8",
    marginBottom: 20,
    fontWeight: 900,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#371B34",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 900,
  },
});
