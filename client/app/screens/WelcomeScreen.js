import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.bg}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/memory-plaza.png")}
            style={styles.logo}
          />
          <AppText fontSize={20}>building memories</AppText>
        </View>
        <AppButton
          title="Login"
          styleText={{ color: colors.primary }}
          styleButton={styles.loginButton}
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <View style={{ height: 10 }}></View>
        <AppButton
          title="Register"
          styleText={{ color: colors.primary }}
          styleButton={styles.regButton}
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
        <View style={{ height: 50 }}></View>
      </View>
    </Screen>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    width: "100%",
    height: 200,
  },
  loginButton: {
    backgroundColor: colors.secondary,
    borderColor: colors.light,
    width: "100%",
  },
  logoContainer: {
    width: "100%",
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  regButton: {
    backgroundColor: colors.light,
    borderColor: colors.light,
    width: "100%",
  },
});
