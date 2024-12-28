
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../App';

export default function SalesScreen() {
  const { producedGoods, setProducedGoods, money, setMoney } = useContext(AppContext);

  const sellGoods = () => {
    if (producedGoods > 0) {
      setProducedGoods(producedGoods - 1);
      setMoney(money + 10);
    } else {
      alert('No goods to sell!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sales Management</Text>
      <Text>Produced Goods: {producedGoods}</Text>
      <Text>Money: ${money}</Text>
      <Button title="Sell Goods" onPress={sellGoods} />
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
