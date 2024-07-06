import React from 'react';
import { Text, Image, StyleSheet, View, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

function ListItem({ title, description, image, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight style={styles.container} underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            <Image style={styles.image} source={image} alt="Here is an image" />
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15
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
  description: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '300',
    color: '#6e6969'
  }
})

export default ListItem;