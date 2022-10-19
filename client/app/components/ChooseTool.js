import React from "react";
import { FlatList, View } from "react-native";
import { useFormikContext } from "formik";

import AppText from "./AppText";
import { ErrorMessage } from "./forms";
import Tool from "./Tool";
import tools from "../config/toolsIcons";

export default function ChooseTool({ tool, name, setTool }) {
  const { setFieldValue, errors, values } = useFormikContext();

  const handlePress = (item) => {
    if (tool === item) return null;

    setTool(item);
    setFieldValue(name, item);
    setFieldValue("content", "");
  };

  return (
    <>
      <View>
        <FlatList
          numColumns={"2"}
          columnWrapperStyle={{ justifyContent: "space-evenly" }}
          scrollEnabled={false}
          data={tools}
          keyExtractor={(tool) => tool.id.toString()}
          renderItem={({ item }) => (
            <Tool
              onPress={() => handlePress(item.icon)}
              selected={tool === item.icon ? true : false}
              disabled={item.disabled}
              icon={item.icon}
            >
              {item.name}
            </Tool>
          )}
        />
        <ErrorMessage
          style={{ textAlign: "center" }}
          error={errors[name]}
          visible={true}
        />
      </View>
    </>
  );
}
