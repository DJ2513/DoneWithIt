import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={35} color={colors.white} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" size={35} color={colors.white} />
      </View>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require("../assets/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 60,
    left: 20
  },
  container: {
    backgroundColor: colors.black,
    flex: 1
  },
  deleteIcon: {
    position: 'absolute',
    top: 60,
    right: 20
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1
  }
})

export default ViewImageScreen;