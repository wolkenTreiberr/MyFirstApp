import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, Image, SafeAreaView, View, } from 'react-native';

import VeiwImageScreen from './app/screens/VeiwImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  return (
    <ListingDetailsScreen></ListingDetailsScreen>
  );
}

