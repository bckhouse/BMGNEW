import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SalesScreen() {
  return (
    <View style={styles.container}>
      <Text>Manage your Sales</Text>
      <Button title="Sell Items" onPress={() => alert('Selling...')} />
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