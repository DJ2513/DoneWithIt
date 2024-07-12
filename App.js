import React, { useState } from 'react';
import Screen from './App/components/Screen';
import { Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import AuthNavigator from './App/navigation/AuthNatigator';
import navigationTheme from './App/navigation/navigationTheme';
import AppNavigator from './App/navigation/AppNavigator';
import ListingDetailsScreen from './App/Screens/ListingDetailsScreen';
import FeedNavigator from './App/navigation/FeedNavigator';
import AccountNavigator from './App/navigation/AccountNavigator';

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>)
}
