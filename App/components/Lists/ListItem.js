import React from 'react';
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native';
import colors from '../../config/colors';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../../config/styles'
import AppText from '../AppText';

function ListItem({ title, description, image, IconComponent, onPress, renderRightActions, marginBottom }) {
  return (
    <GestureHandlerRootView style={{ marginBottom }}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight style={styles.container} underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailContainer}>
              <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
              {description && <AppText style={styles.description} numberOfLines={2}>{description}</AppText>}
            </View>
            <MaterialCommunityIcons name="chevron-right" size={25} color={defaultStyles.colors.medium} />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 5,
    backgroundColor: colors.white,
    alignItems: 'center'
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontSize: 18,
    fontWeight: '500'
  },
  description: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '300',
    color: colors.medium
  }
})

export default ListItem;