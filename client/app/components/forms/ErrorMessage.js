import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";

import AppText from "../AppText";

export default function ErrorMessage({ error, visible, style }) {
  if (!visible || !error) return null;

  return <AppText style={[styles.message, style]}>{error}</AppText>;
}

const styles = StyleSheet.create({
  message: {
    color: colors.error,
    fontWeight: "800",
  },
});
