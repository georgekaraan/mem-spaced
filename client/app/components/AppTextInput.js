import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function AppTextInput({ icon, items, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialIcons
          style={styles.icon}
          name={icon}
          size={24}
          color="black"
        />
      )}
      <TextInput style={[defaultStyles.text, styles.text]} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginBottom: 20,
  },
  icon: {
    width: 25,
    color: colors.dark,
  },
  text: {
    width: "80%",
    marginLeft: 10,
  },
});
