import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function Settings({ navigation }) {
  const [color, setColor] = useState("");
  const [modified, setModified] = useState(false);
  const updateColor = (value) => {
    setColor(value);
    setModified(true);
  };

  const saveColor = async () => {
    try {
      await AsyncStorage.setItem("@color", color);
      setModified(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const color = await AsyncStorage.getItem("@color");
        setColor(color);
      } catch (e) {
        console.error(e);
      }
    };
    fetchColor();
  }, []);

  return (
    <View style={styles.container}>
      <Text>This are your settings</Text>
      <View style={styles.inner}>
        <Text>Favorite color</Text>
        <TextInput
          style={{ borderWidth: 1 }}
          onChangeText={updateColor}
          defaultValue={color}
        />
        <Button onPress={saveColor} title="Save" disabled={!modified} />
      </View>
      <Button onPress={() => navigation.navigate("About")} title="About" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    flex: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
