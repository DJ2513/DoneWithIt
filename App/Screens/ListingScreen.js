import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import React, { useEffect, useState } from 'react';

import colors from '../config/colors';
import listingsApi from '../api/listings';
import Screen from '../components/Screen';
import routes from '../navigation/routes';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';


function ListingScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request(1, 2, 3);
  }, [])



  return (
    <Screen extraStyles={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title='Retry' onPress={getListingsApi.request(1, 2, 3)} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`$ ${item.price}`}
            imageUrl={item.images[0]}
            onPress={() =>
              navigation.navigate(routes.LISTING_DETAILS, item)}
          />)
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
    flex: 1
  }
})

export default ListingScreen;