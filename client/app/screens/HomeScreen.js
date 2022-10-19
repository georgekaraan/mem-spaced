import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import ActivityIndicator from "../components/ActivityIndicator";
import AppHeading from "../components/AppHeading";
import colors from "../config/colors";
import memoriesApi from "../api/memories";
import MemoryCard from "../components/MemoryCard";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

export default function HomeScreen({ navigation }) {
  const {
    data: memories,
    error,
    loading,
    request: loadMemories,
  } = useApi(memoriesApi.getMemories);

  useEffect(() => {
    loadMemories();
  }, []);

  return (
    <Screen>
      <AppHeading>My Memories</AppHeading>

      {error && (
        <>
          <AppText>Couldn't retrieve your list of memories.</AppText>
          <AppButton title="Retry" onPress={loadMemories} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={memories}
        keyExtractor={(mem) => mem._id.toString()}
        refreshing={false}
        onRefresh={() => loadMemories()}
        renderItem={({ item }) => (
          <MemoryCard
            title={item.title}
            subTitle={item.content}
            type={item.tool}
            onPress={() => navigation.navigate(routes.MEMORY_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}
