import React from "react";
import MemoryCard from "../components/MemoryCard";
import { FlatList } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import AppHeading from "../components/AppHeading";

const memories = [
  {
    id: 1,
    title: "Passage from 4000 weeks and some",
    subTitle:
      "What the man says is what he does and yet he doesn't go away man. He keps saying it but then he doesn't",
    type: "text",
  },
  {
    id: 2,
    title: "Funny Story - Diagonal",
    subTitle: "it is me",
    type: "voicenote",
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <Screen>
      <AppHeading>My Memories</AppHeading>
      <FlatList
        data={memories}
        keyExtractor={(mem) => mem.id.toString()}
        renderItem={({ item }) => (
          <MemoryCard
            title={item.title}
            subTitle={item.subTitle}
            type={item.type}
            onPress={() => navigation.navigate("MemoryDetails", item)}
          />
        )}
      />
    </Screen>
  );
}
