import React from 'react';
import Screen from '../components/Screen';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup'
import { AppForm, AppFormField, SubmitButton } from '../components/Forms'


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {
  return (
    <Screen extraStyles={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/logo-red.png')}
      />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          placeholder='Email'
          icon='email'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <AppFormField
          name="password"
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title='Login' />
      </AppForm>


    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  }
})

export default LoginScreen;