import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import colors from '../config/colors';

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.Card}>
      <ImageBackground
        style={styles.Image}
        source={image}
        resizeMethod='scale'
      />
      <View style={styles.TextContainer}>
        <Text style={styles.Title}>
          {title}
        </Text>
        <Text style={styles.Subtitle}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    marginBottom: 20,
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: 'hidden'
  },
  Image: {
    width: "100%",
    height: 200,
  },
  TextContainer: {
    padding: 15
  },
  Title: {
    fontWeight: "400",
    fontSize: 18,
    marginBottom: 7
  },
  Subtitle: {
    fontWeight: "400",
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 15
  }
})

export default Card;