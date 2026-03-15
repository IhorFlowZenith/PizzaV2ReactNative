/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartScreen from "./src/screens/CartScreen.tsx";
import HomeScreen from "./src/screens/HomeScreen.tsx";
import OrderHistoryScreen from "./src/screens/OrderHistoryScreen.tsx";
import ProfileScreen from "./src/screens/ProfileScreen.tsx";
import PizzaDetailScreen from "./src/screens/PizzaDetailScreen.tsx";
import CustomTabBar from './src/components/BottomNavigation';

import { CartProvider } from './src/context/CartContext';
import {GestureHandlerRootView} from "react-native-gesture-handler";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <CartProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="MainTabs" component={TabNavigator} />

              <Stack.Screen name="PizzaDetail" component={PizzaDetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={OrderHistoryScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default App;
