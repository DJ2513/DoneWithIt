import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../config/colors';

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%"
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "capitalize"
  },
});

export default AppButton;