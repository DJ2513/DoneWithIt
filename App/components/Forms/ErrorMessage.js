import AppText from "../AppText";
import { StyleSheet } from 'react-native';

import React from 'react';

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null

  return (
    <AppText style={styles.error}>{error}</AppText>
  );
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
  }
})

export default ErrorMessage;