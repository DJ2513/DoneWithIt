import ErrorMessage from "./ErrorMessage";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from 'formik'
import React from 'react';

function AppFormField({ name, width, ...otherProps }) {

  const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
