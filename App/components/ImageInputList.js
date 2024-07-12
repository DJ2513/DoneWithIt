import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {

  const scrollView = useRef();

  const handleScroll = () => {
    scrollView.current.scrollToEnd()
  }

  return (
    <View>
      <ScrollView ref={scrollView} horizontal onContentSizeChange={handleScroll}>
        <View style={styles.container}>
          {imageUris.map(uri => (
            <View style={styles.image}>
              <ImageInput
                imageUri={uri}
                key={uri}
                onChangeImage={
                  () => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput key={imageUris.uri} onChangeImage={uri => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    marginRight: 10
  }
});

export default ImageInputList;