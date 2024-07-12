import React from 'react';
import { StyleSheet } from 'react-native';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

function FormImagePicker({ name }) {

  const { setFieldValue, values, errors, touched } = useFormikContext()
  const imageUris = values[name]

  const handleAdd = uri => {
    setFieldValue(name, [...imageUris, uri]);
  }

  const handleRemove = uri => {
    setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri));
  }

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        key={name}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default FormImagePicker;