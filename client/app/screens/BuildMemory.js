import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import * as Yup from "yup";

import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import ChooseTool from "../components/ChooseTool";
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as FormPicker,
  SubmitButton,
} from "../components/forms";
import colors from "../config/colors";
import FormImagePicker from "../components/forms/FormImagePicker";
import SchedulePickerItem from "../components/SchedulePickerItem";
import schedules from "../config/schedules";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(4).label("Title of Memory"),
  tool: Yup.string().required().label("Tool"),
  schedule: Yup.object().required().label("Schedule"),
  content: Yup.array().min(1, "Please select at least one image."),
  date: Yup.date().default(() => new Date()),
  location: Yup.object(),
});

export default function BuildMemory() {
  const [tool, setTool] = useState();

  const location = useLocation();

  return (
    <>
      <Screen>
        <ScrollView>
          <AppHeading>Building Memory...</AppHeading>

          <Form
            initialValues={{
              title: "",
              tool: "",
              schedule: "",
              content: [],
              date: new Date(),
              location: {},
            }}
            onSubmit={(values) => console.log(location)}
            validationSchema={validationSchema}
          >
            <FormField
              name="title"
              placeholder="Title"
              maxLength={35}
              // multiline
              numberOfLines={2}
              validateOnChange={false}
              validateOnBlur={false}
              styleContainer={styles.titleContainer}
              styleText={styles.titleText}
              placeholderTextColor={colors.light}
            />

            <AppText style={{ padding: 10, fontSize: 22, textAlign: "center" }}>
              Choose your tool
            </AppText>

            <ChooseTool name="tool" tool={tool} setTool={setTool} />

            <AppText style={{ padding: 10, fontSize: 22, textAlign: "center" }}>
              Choose your schedule
            </AppText>

            <FormPicker
              icon={"calendar"}
              items={schedules}
              name="schedule"
              placeholder={"Schedule"}
              PickerItemComponent={SchedulePickerItem}
            />

            {/* {console.log(formRef.values)} */}
            {/* {!formRef.values.schedule.id && <ErrorMessage />} */}

            {/* <AppButton
            title="Next"
            colorBg="light"
            colorBorder="dark"
            colorText="primary"
            width={"50%"}
            onPress={() => console.log("Next button")}
          /> */}

            {tool === "Image" && <FormImagePicker name="content" />}
            {/* {console.log(tool)} */}

            <SubmitButton
              title="Upload"
              colorText="primary"
              colorBg="secondary"
              colorBorder={"light"}
            />
          </Form>
        </ScrollView>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    padding: 0,
    paddingLeft: 5,
  },
  titleText: {
    fontSize: 30,
    color: colors.secondary,
  },
});
