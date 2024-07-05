import { View, StyleSheet, Text, Image } from 'react-native';
import ListItem from '../components/ListItem';
import React from 'react';
import colors from '../config/colors';

function ListingView(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.textDetails}>
        <Text style={styles.title}>Red jacket for sale!</Text>
        <Text style={styles.price}>$300</Text>
        <View style={styles.listContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: 300
  },
  price: {
    fontSize: 20,
    color: colors.secondary,
    marginVertical: 10
  },
  textDetails: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  listContainer: {
    marginVertical: 40
  }
})

export default ListingView;