import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

export default function AppText({ children, style, num }) {
  return (
    <Text numberOfLines={num} style={[defaultStyles.text, style]}>
      {children}
    </Text>
  );
}
