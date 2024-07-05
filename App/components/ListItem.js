import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';
function ListItem({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} alt="Here is an image" />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,

  },
  title: {
    fontSize: 18,
    fontWeight: '500'
  },
  subtitle: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '300',
    color: '#6e6969'
  }
})

export default ListItem;