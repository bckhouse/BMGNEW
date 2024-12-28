
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../App';

export default function FinanceScreen() {
  const { money, setMoney, bankBalance, setBankBalance } = useContext(AppContext);

  const depositToBank = () => {
    if (money > 0) {
      setBankBalance(bankBalance + money);
      setMoney(0);
      alert(`Deposited $${money} to the bank.`);
    } else {
      alert('No money to deposit!');
    }
  };

  const withdrawFromBank = (amount) => {
    if (bankBalance >= amount) {
      setBankBalance(bankBalance - amount);
      setMoney(money + amount);
      alert(`Withdrew $${amount} from the bank.`);
    } else {
      alert('Insufficient bank balance!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finance Management</Text>
      <Text>Money: ${money}</Text>
      <Text>Bank Balance: ${bankBalance}</Text>
      <Button title="Deposit All Money" onPress={depositToBank} />
      <Button title="Withdraw $10,000" onPress={() => withdrawFromBank(10000)} />
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
