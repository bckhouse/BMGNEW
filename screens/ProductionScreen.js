import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ProductionScreen() {
  return (
    <View style={styles.container}>
      <Text>Manage your Production</Text>
      <Button title="Produce Items" onPress={() => alert('Producing...')} />
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