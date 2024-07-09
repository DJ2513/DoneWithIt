import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Constants from 'expo-constants'
import colors from '../config/colors';

function Screen({ children, extraStyles }) {
  return (
    <SafeAreaView style={[styles.screen, extraStyles]}>
      <View style={extraStyles}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  }
})

export default Screen;