import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import About from "./screens/About";
import Settings from "./screens/Settings";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

const AppContainer = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      {/*<Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>*/}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppContainer;
