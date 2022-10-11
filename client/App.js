import HomeScreen from "./app/screens/HomeScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import BuildMemory from "./app/screens/BuildMemory";
import { StatusBar } from "expo-status-bar";
import ReminderList from "./app/components/ReminderList";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import AppFormPicker from "./app/components/forms/AppFormPicker";
import LogInScreen from "./app/screens/LogInScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ImageInput from "./app/components/ImageInput";
import ImagePick from "./app/components/ImagePick";
import CameraInput from "./app/components/CameraInput";
import { Button, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import navigationTheme from "./app/navigation/navigationTheme";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import MemoryDetails from "./app/screens/MemoryDetails";

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
      {/* <MemoryDetails /> */}
      {/* <WelcomeScreen /> */}
      {/* <HomeScreen /> */}
      {/* <LogInScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <BuildMemory /> */}
      {/* <ReminderList /> */}
    </>
  );
}
