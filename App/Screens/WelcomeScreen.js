import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen({ children }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.backgorund}
      source={require("../assets/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButtonContainer}>
        {children}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgorund: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: "#fc5c65"
  },
  resgisterButton: {
    width: '100%',
    height: 70,
    backgroundColor: "#4ecdc4"
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  loginButtonContainer: {
    position: "relative",
    bottom: 20,
    width: "100%",
    alignItems: "center",
    alignContent: "space-between"
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20
  }
})


export default WelcomeScreen;