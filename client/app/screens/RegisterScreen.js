import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import colors from "../config/colors";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  user: Yup.string().required().min(4).max(10).label("User Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  return (
    <>
      <Screen>
        <Image
          style={styles.logo}
          source={require("../assets/memory-plaza.png")}
        />

        <Form
          initialValues={{ user: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="account-circle"
            name="user"
            placeholder="user name"
            textContentType={"username"}
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="email"
            textContentType={"emailAddress"}
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="password"
            textContentType={"password"}
            secureTextEntry
          />
          <SubmitButton
            title="Register"
            styleText={{ color: colors.primary }}
            styleButton={styles.regButton}
          />
        </Form>
      </Screen>
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
  regButton: {
    backgroundColor: colors.light,
    borderColor: colors.light,
    width: "100%",
  },
});
