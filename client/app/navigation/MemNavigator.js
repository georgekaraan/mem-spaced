import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import MemoryDetails from "../screens/MemoryDetails";

const Stack = createNativeStackNavigator();
const MemNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="MemoryDetails" component={MemoryDetails} />
  </Stack.Navigator>
);

export default MemNavigator;
