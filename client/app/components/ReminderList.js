import React from "react";
import { View, FlatList } from "react-native";

import colors from "../config/colors";
import SingleReminderCheck from "./SingleReminderCheck";

export default function ReminderList({ style }) {
  return (
    <View style={style}>
      <FlatList
        style={{ borderRadius: 15 }}
        data={reminderList}
        keyExtractor={(rem) => rem.id.toString()}
        renderItem={({ item }) => (
          <SingleReminderCheck
            active={item.active}
            marked={item.marked}
            date={item.date_marked}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: colors.primary }} />
        )}
      />
    </View>
  );
}

const reminderList = [
  {
    id: 1,
    num: 1,
    active: false,
    marked: true,
    date_marked: new Date("01/01/1997"),
  },
  {
    id: 2,
    num: 2,
    active: false,
    marked: true,
    date_marked: new Date("01/02/2022"),
  },
  {
    id: 3,
    num: 3,
    active: false,
    marked: true,
    date_marked: new Date("01/03/2022"),
  },
  {
    id: 4,
    num: 4,
    active: false,
    marked: true,
    date_marked: new Date("09/07/2022"),
  },
  {
    id: 5,
    num: 5,
    active: true,
    marked: false,
    date_marked: new Date("09/10/2022"),
  },
  {
    id: 6,
    num: 6,
    active: false,
    marked: false,
    date_marked: "+ 2 months",
  },
];
