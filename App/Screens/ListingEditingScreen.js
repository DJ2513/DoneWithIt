import React from 'react';
import Screen from '../components/Screen';
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/Forms'
import * as Yup from 'yup'
import { StyleSheet } from 'react-native';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Name'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
})

const categories = [
  { label: 'Clothes', value: 1 },
  { label: 'Shoes', value: 2 },
  { label: 'Electronics', value: 3 },
  { label: 'Furniture', value: 4 },
  { label: 'Other', value: 5 }
]

function ListingEditingScreen(props) {
  return (
    <Screen extraStyles={styles.container}>
      <AppForm
        initialValues={{ title: '', price: '', category: null, description: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="title"
          placeholder="Title"
          maxLength={255}
        />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="decimal-pad"
          maxLength={8}
          width={120}
        />
        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          name='description'
          placeholder='Description'
          multiline={true}
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})

export default ListingEditingScreen;