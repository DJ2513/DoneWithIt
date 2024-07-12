import React from 'react';
import Screen from '../components/Screen';
import { AppForm, AppFormField, AppFormPicker, FormImagePicker, SubmitButton } from '../components/Forms'
import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import CategoryPickerItem from '../components/CategoryPickerItem';
import * as Yup from 'yup'
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Name'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, "Please select at least one Image")
})

const categories = [
  { label: 'Furniture', icon: 'floor-lamp', backgroundColor: colors.primary, value: 1 },
  { label: 'Cars', icon: 'car', backgroundColor: '#fd9644', value: 2 },
  { label: 'Cameras', icon: 'camera', backgroundColor: '#fed330', value: 3 },
  { label: 'Games', icon: 'cards', backgroundColor: '#26de81', value: 4 },
  { label: 'Clothing', icon: 'shoe-heel', backgroundColor: '#2bcbba', value: 5 },
  { label: 'Sports', icon: 'basketball', backgroundColor: '#45aaf2', value: 6 },
  { label: 'Movies  & Music', icon: 'headphones', backgroundColor: '#4b7bec', value: 7 },
  { label: 'Books', icon: 'book-open', backgroundColor: 'purple', value: 8 },
  { label: 'Other', icon: 'window-maximize', backgroundColor: colors.medium, value: 9 },
]

function ListingEditingScreen(props) {
  const location = useLocation();
  return (
    <Screen extraStyles={styles.container}>
      <AppForm
        initialValues={{ title: '', price: '', category: null, description: '', images: [] }}
        onSubmit={() => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker
          name="images"
        />
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
          placeholder="Category"
          items={categories}
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
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