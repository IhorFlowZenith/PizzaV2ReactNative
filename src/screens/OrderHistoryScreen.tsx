import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import OrderCard from "../components/OrderCard.tsx";
import {OrderStatus} from "../constants/Orderbadge.ts";

interface OrderItem {
  id: string;
  orderNumber: string;
  date: string;
  status: OrderStatus;
  pizzaId: number;
}
const renderItem = ({ item }: { item: OrderItem }) => (
  <OrderCard
    orderNumber={item.orderNumber}
    date={item.date}
    status={item.status}
    pizzaId={item.pizzaId}
  />
);

const DATA: OrderItem[] = [
  { id: '1', orderNumber: '2049', date: 'Today, 2:30 PM', status: OrderStatus.COOKING, pizzaId: 2 },
  { id: '2', status: OrderStatus.DELIVERED, orderNumber: '1235', pizzaId: 3, date: 'Yesterday, 10:00 AM' },
  { id: '3', orderNumber: '2050', date: 'Yesterday, 1:15 PM', status: OrderStatus.COMPLETED, pizzaId: 4 },
];

const OrderHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30,
  },
});

export default OrderHistoryScreen;