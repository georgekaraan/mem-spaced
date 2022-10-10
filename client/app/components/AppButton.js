import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

export default function AppButton({ title, color, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: colors.secondary,
    textTransform: "uppercase",
    fontWeight: "bold",
    // width: "70%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 50,
  },

  text: {
    color: colors.light,
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "700",
    color: "white",
  },
});
