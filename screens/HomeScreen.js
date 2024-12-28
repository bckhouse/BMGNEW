
// File: screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-ui-lib';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text text40>Welcome Home</Text>
      <Text>Your company dashboard will appear here.</Text>
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
