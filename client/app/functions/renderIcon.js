import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

export function renderIcon(type, size = "40", color) {
  if (type === "text") {
    return (
      <Entypo name="text-document-inverted" size={size} color={colors[color]} />
    );
  }
  if (type === "voicenote") {
    return (
      <MaterialIcons
        name="record-voice-over"
        size={size}
        color={colors[color]}
      />
    );
  }
  if (type === "image") {
    return <Entypo name="image" size={size} color={colors[color]} />;
  }
  if (type === "quote") {
    return <Entypo name="quote" size={size} color={colors[color]} />;
  }
  if (type === "video") {
    return <Entypo name="video-camera" size={size} color={colors[color]} />;
  }
  if (type === "link") {
    return <Entypo name="link" size={size} color={colors[color]} />;
  }
  if (type === "home") {
    return <Entypo name="home" size={size} color={colors[color]} />;
  }
  if (type === "add") {
    return <Ionicons name="add" size={size} color={colors[color]} />;
  }
  if (type === "stats") {
    return (
      <Ionicons name="ios-stats-chart" size={size} color={colors[color]} />
    );
  }
  if (type === "settings") {
    return <Ionicons name="ios-settings" size={size} color={colors[color]} />;
  }
}
