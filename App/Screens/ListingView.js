import { FlatList, View, StyleSheet } from 'react-native';
import ListItem from '../components/Lists/ListItem';
import Card from '../components/Card';
import React from 'react';
import colors from '../config/colors';
import Screen from '../components/Screen';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 250,
    image: require('../assets/couch.jpg'),
  }
]

function ListingView(props) {
  return (
    <Screen extraStyles={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subtitle={`$ ${item.price}`}
            image={item.image}
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20
  }
})

export default ListingView;