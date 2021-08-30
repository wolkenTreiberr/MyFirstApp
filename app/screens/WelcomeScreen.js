import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text,  } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
        blurRadius={8}
          style={styles.background}
          source={require("../assets/background.jpg")}
        >
            <View style={styles.logoConrainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Text style={styles.logoText}>Sell stuff quickly</Text>
            </View>
            
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    loginButton: {
        width: '70%',
        height: 70,
        bottom: 40,
        backgroundColor: "#fc5c65",
       
    },
    registerButton: {
        width: '70%',
        height: 70,
        bottom: 30,
        backgroundColor: "#4ecdc4",
    },
    logo: {
        width: 150,
        height: 150,
        top: 50,
    },
    
    logoText: {
        top: 60,
        fontSize: 30,
    },
    
    logoConrainer: {
        position: 'absolute',
        alignItems: 'center',
        top: 50,
    },

})
export default WelcomeScreen;