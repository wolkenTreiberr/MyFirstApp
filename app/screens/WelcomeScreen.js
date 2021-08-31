import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoConrainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell stuff quickly</Text>
      </View>
      <View style={styles.buttonsContainer}>
      <AppButton title='Login'/>
      <AppButton title='Register' color='black'/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonsContainer: {
    padding: 20,
    width: '100%',
  },

  logo: {
    width: 150,
    height: 150,
    marginVertical: 40
  },

  tagline: {
    fontSize: 25,
    fontWeight: '600',
    marginVertical: 1
  },

  logoConrainer: {
    position: "absolute",
    alignItems: "center",
    top: 50,
  },
});
export default WelcomeScreen;
