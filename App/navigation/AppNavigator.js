import React from 'react';
const { createBottomTabNavigator } = require("@react-navigation/bottom-tabs");
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AccountNavigator from './AccountNavigator';
import ListingEditingScreen from '../Screens/ListingEditingScreen';
import FeedNavigator from './FeedNavigator';
import NewListingButton from './NewListingButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name='Feed'
      component={FeedNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />)
      }}
    />
    <Tab.Screen
      name='ListingEdit'
      component={ListingEditingScreen}
      options={({ navigation }) => ({
        headerShown: false,
        tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDITS)} />,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="plus-circle" size={size} color={color} />)
      })}
    />
    <Tab.Screen
      name='Account'
      component={AccountNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />)
      }} />
  </Tab.Navigator>
)

export default AppNavigator