
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CompanySetupScreen({ onComplete }) {
  const [companyName, setCompanyName] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('Technology');

  const handleSetup = async () => {
    if (companyName.trim() === '') {
      alert('Please enter a valid company name.');
      return;
    }
    const companyData = {
      name: companyName,
      industry: selectedIndustry,
    };
    await AsyncStorage.setItem('companyData', JSON.stringify(companyData));
    onComplete();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setup Your Company</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Company Name"
        value={companyName}
        onChangeText={setCompanyName}
      />
      <Text style={styles.label}>Select Industry:</Text>
      <Picker
        selectedValue={selectedIndustry}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedIndustry(itemValue)}
      >
        <Picker.Item label="Technology" value="Technology" />
        <Picker.Item label="Manufacturing" value="Manufacturing" />
        <Picker.Item label="Healthcare" value="Healthcare" />
        <Picker.Item label="Finance" value="Finance" />
      </Picker>
      <Button title="Start Company" onPress={handleSetup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});
