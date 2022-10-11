import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

import AppHeading from "./AppHeading";
import ImageInput from "./ImageInput";

export default function ImagePick({}) {
  const [imagesUri, setImagesUri] = useState([]);

  return (
    <>
      <AppHeading>Add Your Image(s)...</AppHeading>
      <View style={styles.container}>
        <ImageInput
          imagesUri={imagesUri}
          onChangeImage={(uris) => setImagesUri(uris)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
