import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";
import { useFormikContext } from 'formik'
import React from 'react';


function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}) {

  const { setFieldValue, values, errors, touched } = useFormikContext()

  return (
    <>
      <AppPicker
        items={items}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
