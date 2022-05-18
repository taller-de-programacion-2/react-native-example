import { StyleSheet, Text, View } from "react-native";
import { Grid } from "../components/Grid";

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About this app!</Text>
      <Grid />
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
