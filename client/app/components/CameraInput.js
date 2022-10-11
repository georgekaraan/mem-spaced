import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import AppButton from "./AppButton";
import AppText from "./AppText";

export default function CameraInput({}) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const requestPermissions = async () => {
    const { granted } = await Camera.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the camera.");
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const startCamera = async () => {
    try {
      const result = await Camera;
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("Error reading the image");
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <AppText style={styles.text}>Flip Camera</AppText>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
