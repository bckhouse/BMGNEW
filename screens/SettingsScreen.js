
// File: screens/SettingsScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-ui-lib';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text text40>Settings</Text>
      <Text>Configure your preferences here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
