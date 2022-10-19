import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import ButtonGroup from "../components/ButtonGroup";
import ChooseTool from "../components/ChooseTool";
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as FormPicker,
  SubmitButton,
} from "../components/forms";
import colors from "../config/colors";
import FormImagePicker from "../components/forms/FormImagePicker";
import FormTextInput from "../components/forms/FormTextInput";
import memoriesApi from "../api/memories";
import SchedulePickerItem from "../components/SchedulePickerItem";
import schedules from "../config/schedules";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = {
  general: Yup.object().shape({
    title: Yup.string().required().min(4).label("Title of Memory"),
    tool: Yup.string().required().label("Tool"),
    date_created: Yup.date().default(() => new Date()),
  }),
  image: Yup.object().shape({
    content: Yup.array().min(1, "Please select at least one image."),
  }),
  text: Yup.object().shape({
    content: Yup.string().required().min(5).max(1000).label("Text"),
  }),
  quote: Yup.object().shape({
    content: Yup.string().min(5).max(1000).label("Text"),
  }),
  schedule: Yup.object().shape({
    schedule: Yup.object().required().label("Schedule"),
  }),
};

export default function BuildMemory() {
  const [tool, setTool] = useState();
  const [page, setPage] = useState("general");
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const location = useLocation();
  const formRef = useRef();

  useEffect(() => {
    console.log(page);
  }, [page]);

  const handleSubmit = async (memory) => {
    if (memory.schedule == "") return null;

    tool === "image" && setUploadVisible(true);
    const result = await memoriesApi.addMemory(
      { ...memory, location },
      tool,
      (progress) => setProgress(progress)
    );
    setUploadVisible(false);

    if (!result.ok) return alert("Could not save the memory.");
    alert("Success");
  };

  return (
    <>
      <Screen>
        <UploadScreen progress={progress} visible={uploadVisible} />
        <AppHeading>Building Memory...</AppHeading>

        <Form
          enableReinitialize
          initialValues={{
            title: "",
            tool: "",
            schedule: "",
            content: [],
            date: new Date(),
            location: "",
          }}
          innerRef={formRef}
          onSubmit={handleSubmit}
          validationSchema={validationSchema[page]}
        >
          {page === "general" && (
            <>
              <FormField
                name="title"
                placeholder="Title"
                maxLength={35}
                multiline
                numberOfLines={2}
                validateOnChange={false}
                validateOnBlur={false}
                styleContainer={styles.titleContainer}
                styleText={styles.titleText}
                placeholderTextColor={colors.light}
              />

              <AppText
                style={{ padding: 10, fontSize: 22, textAlign: "center" }}
              >
                Choose your tool
              </AppText>

              <ChooseTool name="tool" tool={tool} setTool={setTool} />

              <SubmitButton
                styleButton={styles.nextButton}
                styleText={styles.nextText}
                title="Next"
                setPage={() => setPage(tool)}
                tool={tool}
              />
            </>
          )}

          {page === "image" && <FormImagePicker name="content" />}

          {page === "text" && <FormTextInput name="content" />}
          {/* {page === "quote" && <FormQuoteInput name="content" />} */}

          {page != "general" && page != "final" && (
            <ButtonGroup
              onPress={() => setPage("general")}
              setPage={setPage}
              titleL="Back"
              titleR="Next"
            />
          )}

          {page === "final" && (
            <>
              <AppText
                style={{ padding: 10, fontSize: 22, textAlign: "center" }}
              >
                Choose your schedule
              </AppText>

              <FormPicker
                icon={"calendar"}
                items={schedules}
                name="schedule"
                placeholder={"Schedule"}
                PickerItemComponent={SchedulePickerItem}
              />

              <ButtonGroup
                onPress={() => setPage(tool)}
                titleL="Back"
                titleR="Submit"
                setPage={setPage}
              />

              {/* <AppButton
                title="Back"
                styleButton={styles.backButton}
                styleText={styles.backText}
                onPress={() => setPage("general")}
              />
              <SubmitButton title="Upload" /> */}
            </>
          )}
        </Form>
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
  nextButton: {
    alignSelf: "flex-end",
    width: "45%",
    backgroundColor: colors.secondary,
  },
  nextText: {
    color: colors.primary,
  },
});
