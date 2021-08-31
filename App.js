import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Screen from './app/components/Screen';
import colors from './app/config/colors';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
  return (
    <Screen>
      <Icon
      name="email"
      size={50}
      backgroundColor="red"
      iconColor={colors.white}
      />
    </Screen>
  );
}

