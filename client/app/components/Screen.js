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

export default function Screen({ children, style }) {
  return (
    <ImageBackground
      style={[styles.bg_image, style]}
      source={{
        uri: "https://res.cloudinary.com/dg8xjejgr/image/upload/v1665155112/07_kpyew8.jpg",
      }}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  bg_image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  view: {
    flex: 1,
  },
});
