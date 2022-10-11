import React from "react";
import AppText from "./AppText";

export default function AppHeading({ children }) {
  return <AppText style={{ padding: 10, fontSize: 32 }}>{children}</AppText>;
}
