import React, { useEffect } from 'react';
import { StyleSheet, Image, View, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';
import * as ImagePicker from 'expo-image-picker'

function ImageInput({ imageUri, onChangeImage }) {

  const requestPermision = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to use camera")
  };

  useEffect(() => {
    requestPermision();
  }, []);


  const handlePress = () => {
    if (!imageUri) selectImage()
    else {
      Alert.alert('Are you sure you want to delete the image?', '', [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No' }
      ])
    }
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      })
      if (!result.canceled) onChangeImage(result.assets[0].uri)
    } catch (error) {
      console.log('Error ->', error)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons name='camera' size={40} color={colors.medium} />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: colors.light,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden"
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default ImageInput;