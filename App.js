import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, View, Dimensions } from 'react-native';

import VeiwImageScreen from './app/screens/VeiwImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/components/AppText';

export default function App() {

  console.log(Dimensions.get("screen"))
  return (
    <SafeAreaView>
   <AppText>I loveReact Native!</AppText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
