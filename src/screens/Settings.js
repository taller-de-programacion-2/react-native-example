import { StyleSheet, Text, View, Button } from "react-native";

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This are your settings</Text>
      <Button onPress={() => navigation.navigate("About")} title="About" />
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
