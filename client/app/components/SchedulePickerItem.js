import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function SchedulePickerItem({ item, label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppText style={styles.title}>{item.label}</AppText>
      <AppText style={styles.desc}>{item.timetable}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: "100%",
    marginVertical: 15,
    borderRadius: 15,
    flexGrow: 1,
    padding: 15,
  },
  desc: {
    color: colors.primary,
  },
  title: {
    color: colors.primary,
    textAlign: "center",
    fontSize: "22",
    fontWeight: "600",
  },
});
