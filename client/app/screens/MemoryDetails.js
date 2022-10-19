import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import { renderIcon } from "../functions/renderIcon";
import ReminderList from "../components/ReminderList";
import AppButton from "../components/AppButton";

export default function MemoryDetails({ route }) {
  const listing = route.params;

  return (
    <View style={styles.card}>
      <AppText num={1} style={styles.title}>
        {listing.title}
      </AppText>
      <ReminderList
        style={{
          marginVertical: 30,
          borderWidth: 2,
          borderColor: colors.dark,
          borderRadius: 20,
        }}
      />
      <AppButton
        styleButton={{ backgroundColor: colors.dark }}
        title="Mark Complete"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.secondary,
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 10,

    shadowColor: "gray",
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    height: "70%",
  },
  cardImage: {
    flex: 1,
    alignSelf: "center",
  },
  cardDesc: {
    flex: 3,
    marginRight: 5,
  },
  title: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: "600",
    paddingHorizontal: 10,
  },
  subTitle: {
    flexWrap: "wrap",
    fontSize: 18,
    fontStyle: "italic",
    color: colors.primary,
  },
  more: {
    position: "absolute",
    bottom: 10,
    right: 10,
    color: colors.dark,
    textDecorationLine: "underline",
  },
});
