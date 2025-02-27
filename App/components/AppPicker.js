import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import defaultStyles from '../config/styles'
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = '100%',
}) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => { setModalVisible(true) }}>
        <View style={[styles.container, { width }]}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
          {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}

          <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='fade'>
        <Screen>
          <Button title='Close' onPress={() => { setModalVisible(false) }} />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) =>
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false)
                  onSelectItem(item)
                }} />
            }
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1
  },
  text: {
    flex: 1
  }
})

export default AppPicker;