import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { api } from "../api";
//SafeAreaView: Permite posicionar el contenido sin pisar la status-bar, notches, etc.
const Profile = ({ navigation, route }) => {
  const { id } = route.params;

  const [data, setData] = useState({});

  useEffect(() => {
    let mounted = true;
    const fetchUserData = async (id) => {
      try {
        const response = await api.get(`/api/users/${id}`);
        if (mounted) setData(response.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUserData(id);
    return () => {
      mounted = false;
    };
  }, [id]);

  return (
    <SafeAreaView>
      <Text>Mi perfil</Text>
      <Text>Email: {data.email}</Text>
      <Text>Nombre: {data.first_name}</Text>
      <Text>Apellido: {data.last_name}</Text>
    </SafeAreaView>
  );
};

export default Profile;
