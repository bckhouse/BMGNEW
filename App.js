
// File: App.js
import React, { useState, useEffect, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-ui-lib';
import HomeScreen from './screens/HomeScreen';
import ProductionScreen from './screens/ProductionScreen';
import SalesScreen from './screens/SalesScreen';
import FinanceScreen from './screens/FinanceScreen';
import HRScreen from './screens/HRScreen';
import CommodityExchangeScreen from './screens/CommodityExchangeScreen';
import CompanySetupScreen from './screens/CompanySetupScreen';

const Tab = createBottomTabNavigator();

// App Context
export const AppContext = createContext();

function Header({ companyName, money }) {
  const currentDate = new Date().toUTCString();
  return (
    <View style={styles.headerContainer}>
      <Text text40>{companyName}</Text>
      <Text text60>Balance: ${money}</Text>
      <Text text90>{currentDate}</Text>
    </View>
  );
}

export default function App() {
  const [isCompanySetup, setIsCompanySetup] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [producedGoods, setProducedGoods] = useState(0);
  const [money, setMoney] = useState(0);
  const [bankBalance, setBankBalance] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [rawMaterials, setRawMaterials] = useState({ engine: 0, tires: 0, body: 0 });
  const [researchTabAvailable, setResearchTabAvailable] = useState(false);

  useEffect(() => {
    const initializeGame = async () => {
      const companyData = await AsyncStorage.getItem('companyData');
      if (companyData) {
        const parsedData = JSON.parse(companyData);
        setCompanyName(parsedData.name);
        setMoney(parsedData.startCapital || 100000);
        setIsCompanySetup(true);
      }
    };
    initializeGame();
  }, []);

  const contextValue = {
    companyName,
    producedGoods,
    setProducedGoods,
    money,
    setMoney,
    bankBalance,
    setBankBalance,
    employees,
    setEmployees,
    rawMaterials,
    setRawMaterials,
    researchTabAvailable,
    setResearchTabAvailable,
  };

  if (!isCompanySetup) {
    return (
      <NavigationContainer>
        <CompanySetupScreen
          onComplete={(name) => {
            AsyncStorage.setItem(
              'companyData',
              JSON.stringify({ name, startCapital: 100000 })
            );
            setCompanyName(name);
            setMoney(100000);
            setIsCompanySetup(true);
          }}
        />
      </NavigationContainer>
    );
  }

  return (
    <AppContext.Provider value={contextValue}>
      <NavigationContainer>
        <Header companyName={companyName} money={money} />
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Production" component={ProductionScreen} />
          <Tab.Screen name="Sales" component={SalesScreen} />
          <Tab.Screen name="Finance" component={FinanceScreen} />
          <Tab.Screen name="HR" component={HRScreen} />
          <Tab.Screen name="Commodity Exchange" component={CommodityExchangeScreen} />
          {researchTabAvailable && <Tab.Screen name="Research" component={ResearchScreen} />}
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});
