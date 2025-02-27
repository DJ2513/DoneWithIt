import { Text } from 'react-native';
import defaultStyles from '../config/styles'
import React from 'react';

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>
  );
}


export default AppText;