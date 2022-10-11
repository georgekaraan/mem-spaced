import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

export default function AppText({ children, style, num }) {
  return (
    <Text numberOfLines={num} style={[defaultStyles.text, style]}>
      {children}
    </Text>
  );
}
