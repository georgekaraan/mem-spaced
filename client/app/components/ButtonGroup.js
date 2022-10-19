import React from "react";
import { View, StyleSheet } from "react-native";

import AppButton from "./AppButton";
import colors from "../config/colors";
import { SubmitButton } from "./forms";

export default function ButtonGroup({
  setPage,
  tool,
  onPress,
  titleL,
  titleR,
}) {
  return (
    <View style={styles.btnGroup}>
      <AppButton
        title={titleL}
        styleButton={styles.backButton}
        styleText={styles.backText}
        onPress={onPress}
      />
      <SubmitButton
        styleButton={styles.nextButton}
        styleText={styles.nextText}
        title={titleR}
        setPage={setPage}
        tool={tool}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    width: "45%",
    backgroundColor: colors.dark,
    borderWidth: 0,
  },
  backText: { color: colors.light },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nextButton: {
    alignSelf: "flex-end",
    width: "45%",
    backgroundColor: colors.secondary,
  },
  nextText: {
    color: colors.primary,
  },
});
