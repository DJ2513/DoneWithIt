import React from 'react';
import { StyleSheet } from 'react-native';
import { AppForm, AppFormField, SubmitButton } from '../components/Forms'
import * as Yup from 'yup'
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

function RegisterScreen() {
  return (
    <Screen extraStyles={styles.container}>
      <AppForm
        initialValues={{ email: '', password: '', name: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="Name"
          placeholder="Name"
          icon='account'
          autoCorrect={false}
          autoCapitalize='none'
          textContentType='emailAddress'
          keyboardType='email-address'
        />
        <AppFormField
          name="email"
          placeholder='Email'
          icon='email'
          autoCorrect={false}
          autoCapitalize='none'
          textContentType='emailAddress'
          keyboardType='email-address'
        />
        <AppFormField
          name="password"
          placeholder='Password'
          icon='lock'
          autoCorrect={false}
          autoCapitalize='none'
          textContentType='password'
          secureTextEntry
        />
        <SubmitButton title='Register' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})

export default RegisterScreen;