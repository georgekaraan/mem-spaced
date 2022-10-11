import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";
import { renderIcon } from "../functions/renderIcon";

export default function Tool({
  children,
  icon,
  onPress,
  selected = false,
  disabled = false,
}) {
  return disabled ? (
    <View style={[styles.tool, { backgroundColor: colors.dark }]}>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          {renderIcon(icon, "35", "light")}
          <AppText style={[styles.text, { color: colors.text }]}>
            {children}
          </AppText>
        </View>
      </TouchableWithoutFeedback>
    </View>
  ) : (
    <TouchableHighlight
      underlayColor={colors.text}
      style={
        selected
          ? [styles.tool, { backgroundColor: colors.secondary }]
          : styles.tool
      }
      onPress={onPress}
    >
      <View style={styles.container}>
        {renderIcon(icon, "35", "primary")}
        <AppText style={styles.text}>{children}</AppText>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  tool: {
    minWidth: 100,
    maxWidth: 100,
    height: 100,
    justifyContent: "center",
    borderRadius: 25,
    marginBottom: 10,
    shadowColor: "gray",
    shadowOpacity: 0.2,
    shadowRadius: 7,
    backgroundColor: colors.light,
  },
  text: {
    paddingTop: 10,
    fontWeight: "600",
    color: colors.primary,
  },
  container: {
    alignItems: "center",
  },
});
