import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function FormTextInput({ name }) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <View style={{ flex: 1 }}>
        <AppTextInput
          //   onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
          styleContainer={styles.container}
          styleText={styles.text}
          multiline
          //   numberOfLines={"12"}
          maxHeight={392}
          minHeight={392}
          value={values[name]}
          keyboardType="default"
          //   returnKeyType="done"
          blurOnSubmit={true}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    width: "100%",
  },
});
