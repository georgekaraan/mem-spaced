import React from "react";
import { FlatList, View } from "react-native";
import { useFormikContext } from "formik";

import AppText from "./AppText";
import { ErrorMessage } from "./forms";
import Tool from "./Tool";

const tools = [
  {
    id: 1,
    icon: "text",
    name: "Text",
  },
  {
    id: 2,
    icon: "quote",
    name: "Quote",
  },
  {
    id: 3,
    icon: "image",
    name: "Image",
  },
  {
    id: 4,
    icon: "video",
    name: "Video",
    disabled: true,
  },
  {
    id: 5,
    icon: "voicenote",
    name: "Recording",
    disabled: true,
  },
  {
    id: 6,
    icon: "link",
    name: "Link",
    disabled: true,
  },
];

export default function ChooseTool({ tool, name, setTool }) {
  const { setFieldValue, errors } = useFormikContext();

  const handlePress = (item) => {
    setTool(item);
    setFieldValue(name, item);
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
              onPress={() => handlePress(item.name)}
              selected={tool === item.name ? true : false}
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
