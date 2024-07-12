import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingScreen from '../Screens/ListingScreen';
import ListingDetailsScreen from '../Screens/ListingDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator presentation='modal' screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
)

export default FeedNavigator