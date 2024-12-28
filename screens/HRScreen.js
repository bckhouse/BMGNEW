
// File: screens/HRScreen.js
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card, GridList } from 'react-native-ui-lib';
import { AppContext } from '../App';

export default function HRScreen() {
  const { employees, setEmployees, money, setMoney } = useContext(AppContext);

  const hireEmployee = (department, type, baseSalary, maxImpact) => {
    const seniorityMultiplier = type === 'Senior' ? 1.5 : type === 'Manager' ? 1.2 : 1;
    const employeeImpact = Math.random() * maxImpact * seniorityMultiplier;

    if (money >= baseSalary) {
      const newEmployee = {
        department,
        type,
        salary: baseSalary,
        impact: employeeImpact,
      };
      setEmployees([...employees, newEmployee]);
      setMoney(money - baseSalary);
      alert(`Hired a ${type} in ${department} for $${baseSalary}`);
    } else {
      alert('Not enough money to hire this employee!');
    }
  };

  const departments = [
    { name: 'Sales', color: 'red' },
    { name: 'Marketing', color: 'blue' },
    { name: 'R&D', color: 'green' },
    { name: 'Quality', color: 'orange' },
    { name: 'HR', color: 'purple' },
    { name: 'Production', color: 'brown' },
  ];

  return (
    <View style={styles.container}>
      <Text text40>HR Management</Text>
      <Text>Employees Hired: {employees.length}</Text>
      {employees.map((emp, index) => (
        <Card key={index} style={styles.card} backgroundColor={departments.find(d => d.name === emp.department)?.color || 'gray'}>
          <Text>{emp.type} in {emp.department}</Text>
          <Text>Impact: {emp.impact.toFixed(2)}</Text>
        </Card>
      ))}
      <GridList
        data={departments}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={[styles.departmentBox, { backgroundColor: item.color }]}>
            <Text text50>{item.name}</Text>
            <Button label="Junior" onPress={() => hireEmployee(item.name, 'Junior', 25000, 5)} />
            <Button label="Manager" onPress={() => hireEmployee(item.name, 'Manager', 50000, 10)} />
            <Button label="Senior" onPress={() => hireEmployee(item.name, 'Senior', 80000, 15)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    marginVertical: 10,
    padding: 15,
  },
  departmentBox: {
    flex: 1,
    margin: 10,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
