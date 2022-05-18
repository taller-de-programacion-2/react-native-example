import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome Home!</Text>
      <Button onPress={() => navigation.navigate("Profile")} title="Profile" />
      <Button
        onPress={() => navigation.navigate("Settings")}
        title="Settings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
