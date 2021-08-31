import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Screen from './app/components/Screen';
import colors from './app/config/colors';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';

export default function App() {
  return (
    <Screen>
      <MessagesScreen/>
    </Screen>
  );
}

