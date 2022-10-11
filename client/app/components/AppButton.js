import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

export default function AppButton({ title, onPress, styleButton, styleText }) {
  return (
    <TouchableOpacity style={[styles.button, styleButton]} onPress={onPress}>
      <Text style={[styles.text, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: colors.secondary,
    textTransform: "uppercase",
    fontWeight: "bold",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    borderWidth: 3,
    borderRadius: 50,
  },

  text: {
    color: colors.light,
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
  },
});
