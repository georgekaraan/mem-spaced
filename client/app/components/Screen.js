import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  View,
} from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";

export default function Screen({ children }) {
  return (
    // <ImageBackground
    //   style={[styles.bg_image, style]}
    //   source={{
    //     uri: "https://res.cloudinary.com/dg8xjejgr/image/upload/v1665155112/07_kpyew8.jpg",
    //   }}
    //   resizeMode="cover"
    // >
    <SafeAreaView style={styles.safe}>
      <View style={styles.screen}>{children}</View>
    </SafeAreaView>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  safe: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
    // alignItems: "center",
  },
  // bg_image: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "flex-end",
  // },
  screen: {
    flex: 1,
    padding: 20,
  },
});
