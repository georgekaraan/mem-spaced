// import { useDimensions } from '@react-native-community/hooks';
import HomeScreen from "./app/screens/HomeScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import BuildMemory from "./app/screens/BuildMemory";
import { StatusBar } from "expo-status-bar";
import ReminderList from "./app/components/ReminderList";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LogInScreen from "./app/screens/LogInScreen";

export default function App() {
  return (
    // need to fix screen component
    <>
      <StatusBar style="light" />
      <Screen style={{ padding: 20 }}>
        {/* <WelcomeScreen /> */}
        {/* <HomeScreen /> */}

        <LogInScreen />

        {/* <BuildMemory /> */}
        {/* <AppPicker icon={"calendar"} placeholder="Scheduler" /> */}

        {/* <ReminderList/> */}
      </Screen>
    </>
  );
}
