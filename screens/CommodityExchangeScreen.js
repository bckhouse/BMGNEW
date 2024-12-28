
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../App';

export default function CommodityExchangeScreen() {
  const { rawMaterials, setRawMaterials, money, setMoney } = useContext(AppContext);

  const buyMaterial = (material, cost) => {
    if (money >= cost) {
      setRawMaterials({ ...rawMaterials, [material]: rawMaterials[material] + 1 });
      setMoney(money - cost);
      alert(`Bought 1 ${material} for $${cost}`);
    } else {
      alert('Not enough money to buy this material!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Commodity Exchange</Text>
      <Text>Money: ${money}</Text>
      <Text>Raw Materials:</Text>
      <Text>Engines: {rawMaterials.engine}</Text>
      <Text>Tires: {rawMaterials.tires}</Text>
      <Text>Bodies: {rawMaterials.body}</Text>
      <Button title="Buy Engine ($1000)" onPress={() => buyMaterial('engine', 1000)} />
      <Button title="Buy Tire ($500)" onPress={() => buyMaterial('tires', 500)} />
      <Button title="Buy Body ($1500)" onPress={() => buyMaterial('body', 1500)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
