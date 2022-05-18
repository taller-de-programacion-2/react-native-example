import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//SafeAreaView: Permite posicionar el contenido sin pisar la status-bar, notches, etc.
const Profile = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>My Profile</Text>
      <Button title="GoBack" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default Profile;
