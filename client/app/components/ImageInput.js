import React, { useEffect } from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";
import AppButton from "./AppButton";

export default function ImageInput({ imagesUri, onChangeImage }) {
  // request permissions
  const requestPermissions = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };
  // when component mounts
  useEffect(() => {
    requestPermissions();
  }, []);

  const handlePressImage = (uri) => {
    Alert.alert("Delete", "Are you sure you want to delete this image?", [
      { text: "No" },
      {
        text: "Yes",
        onPress: () => onChangeImage(imagesUri.filter((img) => img != uri)),
        // onPress: () => console.log(uri),
      },
    ]);
  };

  const selectImage = async () => {
    if (imagesUri.length == "5") {
      Alert.alert(
        "Upload Limit",
        "You have reached the limit for the number of images you can upload."
      );
      return;
    }
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
        allowsMultipleSelection: true,
        selectionLimit: 5 - imagesUri.length,
      });

      if (!result.cancelled) {
        onChangeImage([...imagesUri, ...result.selected.map((obj) => obj.uri)]);
      }
    } catch (error) {
      console.log("Error reading the image");
    }
  };

  return (
    <>
      <View style={styles.buttons}>
        <TouchableWithoutFeedback onPress={selectImage}>
          <View style={[styles.container]}>
            <MaterialCommunityIcons
              color={colors.dark}
              name="image-plus"
              size={30}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={[styles.container, { backgroundColor: colors.dark }]}>
            <MaterialCommunityIcons
              color={colors.light}
              name="camera"
              size={30}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      {imagesUri.length > 1 && (
        <AppButton
          title="Remove All"
          colorBg="dark"
          colorText="error"
          width={120}
          text=""
          center="center"
          font={18}
          onPress={() => onChangeImage([])}
        />
      )}

      {imagesUri && (
        <FlatList
          data={imagesUri}
          horizontal={true}
          scro
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback onPress={() => handlePressImage(item)}>
              <Image source={{ uri: item }} style={styles.image} />
            </TouchableWithoutFeedback>
          )}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 70,
    justifyContent: "center",
    overflow: "hidden",
    width: 70,
    alignSelf: "center",
    margin: 10,
  },
  image: {
    height: 350,
    width: 270,
    borderRadius: 15,
    overflow: "hidden",
    alignSelf: "center",
    marginRight: 20,
  },
});
