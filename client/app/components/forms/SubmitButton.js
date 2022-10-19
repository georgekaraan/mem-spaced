import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

export default function SubmitButton({ title, tool, setPage, ...otherProps }) {
  const { handleSubmit, isValid } = useFormikContext();
  const handlePress = () => {
    handleSubmit();
    if (setPage) {
      if (isValid && tool) setPage(tool);
      else if (isValid && !tool) setPage("final");
    }
  };

  return <AppButton title={title} onPress={handlePress} {...otherProps} />;
}
