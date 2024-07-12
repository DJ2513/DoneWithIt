import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from './Icon';
import AppText from './AppText';

function CategoryPickerItem({ onPress, item }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View >
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: 'center',
    width: "33%"
  },
  label: {
    marginTop: 5,
    textAlign: 'center'
  }
})

export default CategoryPickerItem;