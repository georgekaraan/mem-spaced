import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

export default function SingleReminderCheck({ active, marked, date }) {
  return (
    <View
      style={[
        styles.row,
        active && !marked && styles.active,
        !active && !marked && styles.disabled,
      ]}
    >
      {marked ? (
        <>
          <AntDesign name="checkcircle" size={24} color={colors.primary} />
          <AppText style={{ color: colors.primary }}>
            {date.toDateString()}
          </AppText>
        </>
      ) : (
        <>
          <MaterialIcons
            name="radio-button-unchecked"
            size={24}
            color={colors.dark}
          />
          <AppText>
            {typeof date === "string" ? date : date.toDateString()}
          </AppText>
        </>
      )}
      {/* <AppText style={{ color: colors.primary }}>{date.toDateString()}</AppText> */}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    // width: 300,
    backgroundColor: colors.secondary,
    alignItems: "center",
    height: 50,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  active: {
    backgroundColor: colors.light,
  },
  disabled: {
    backgroundColor: colors.dark,
  },
});
