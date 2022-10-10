import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";

export default function LogInScreen() {
  return (
    <>
      <Image style={styles.logo} source={require("../assets/mem-spaced.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="email"
              textContentType={"emailAddress"}
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="password"
              textContentType={"password"}
              secureTextEntry
            />
            <AppButton
              title={"Log In"}
              color={"tertiary"}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
