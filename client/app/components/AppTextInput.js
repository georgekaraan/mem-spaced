import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function AppTextInput({
  icon,
  items,
  styleContainer,
  styleText,
  ...otherProps
}) {
  return (
    <View style={[styles.container, styleContainer]}>
      {icon && (
        <MaterialIcons
          style={styles.icon}
          name={icon}
          size={24}
          color="black"
        />
      )}
      <TextInput
        style={[defaultStyles.text, styles.text, styleText]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    width: 25,
    color: colors.primary,
  },
  text: {
    width: "80%",
    marginLeft: 10,
    color: colors.primary,
    fontWeight: "600",
  },
});
