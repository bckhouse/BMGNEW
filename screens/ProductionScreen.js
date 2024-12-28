
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../App';

export default function ProductionScreen() {
  const { producedGoods, setProducedGoods, rawMaterials, setRawMaterials } = useContext(AppContext);

  const produceCar = () => {
    if (rawMaterials.engine > 0 && rawMaterials.tires >= 4 && rawMaterials.body > 0) {
      setProducedGoods(producedGoods + 1);
      setRawMaterials({
        engine: rawMaterials.engine - 1,
        tires: rawMaterials.tires - 4,
        body: rawMaterials.body - 1,
      });
      alert('Produced 1 car!');
    } else {
      alert('Not enough raw materials to produce a car!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Production Management</Text>
      <Text>Produced Goods: {producedGoods}</Text>
      <Text>Raw Materials:</Text>
      <Text>Engines: {rawMaterials.engine}</Text>
      <Text>Tires: {rawMaterials.tires}</Text>
      <Text>Bodies: {rawMaterials.body}</Text>
      <Button title="Produce Car" onPress={produceCar} />
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
