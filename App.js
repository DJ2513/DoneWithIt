import React from 'react';
import { SafeAreaView, StyleSheet, Touchable, View, Text } from 'react-native';
import colors from './App/config/colors';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import ViewImageScreen from './App/Screens/ViewImageScreen';
import ButtonComponent from './App/components/ButtonComponent';
import ListingView from './App/Screens/ListingView';

export default function App() {

  const onPress = () => console.log("Pressed!")

  return (
    // <ListingView />
    <ViewImageScreen />
  )
}
