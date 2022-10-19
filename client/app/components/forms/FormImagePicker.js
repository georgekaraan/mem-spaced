import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppHeading from "../AppHeading";
import ErrorMessage from "./ErrorMessage";
import ImageInput from "../ImageInput";

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      {/* <AppHeading>Add Your Image(s)...</AppHeading> */}
      <View style={styles.container}>
        <ImageInput
          imagesUri={values[name]}
          onChangeImage={(uris) => setFieldValue(name, uris)}
        />
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
