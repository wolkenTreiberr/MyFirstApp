import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, View, Dimensions } from 'react-native';
import VeiwImageScreen from './app/screens/VeiwImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {

  console.log(Dimensions.get("screen"))
  return (
    <WelcomeScreen />
    // <VeiwImageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
