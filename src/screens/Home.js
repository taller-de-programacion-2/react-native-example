import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Grid } from "../components/Grid";

export default function Home({ navigation }) {
  const [userId, setUserId] = useState(2);

  return (
    <View style={styles.container}>
      <Text>Welcome Home!</Text>
      <Button
        onPress={() => navigation.navigate("Profile", { id: userId })}
        title="Profile"
      />
      <Button
        onPress={() => navigation.navigate("Settings")}
        title="Settings"
      />
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
