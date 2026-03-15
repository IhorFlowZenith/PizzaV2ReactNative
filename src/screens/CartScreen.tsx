import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CartCard from "../components/CartCard";
import AppButton from "../components/AppButton.tsx";

const CART_DATA = [
  { id: '1', pizzaId: 2, quantity: 1 },
  { id: '2', pizzaId: 3, quantity: 1 },
  { id: '3', pizzaId: 7, quantity: 1 },
  { id: '4', pizzaId: 8, quantity: 1 },
];

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={CART_DATA}
        renderItem={({ item }) => <CartCard pizzaId={item.pizzaId} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{  }}
      />

      <View style={styles.footer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.textPrice}>$45.00</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.textDelivery}>Free</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalPrice}>$45.00</Text>
        </View>
      </View>
      <AppButton title="Checkout" onPress={() => {}} containerColor='#FF6B00' contentColor='white'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#0F0F0F',
      paddingHorizontal: 20,
      paddingBottom: 40,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'white',
      paddingHorizontal: 20,
      paddingTop: 60,
      paddingBottom: 20,
    },
    footer: {
      paddingHorizontal: 20,
      paddingVertical: 25,
      backgroundColor: '#1A1A1A',
      borderRadius: 35,
      borderWidth: 1,
      borderColor: '#262626',
      marginBottom: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5,
    },
    totalText: {
      fontSize: 18,
      color: '#94A3AF',
      fontWeight: '500',
    },
    totalPrice: {
      fontSize: 28,
      color: '#FF6B03',
      fontWeight: 'bold',
    },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#3d444d',
    borderRadius: 1,
    marginVertical: 15,
  },
  text: {
    fontSize: 14,
    color: '#94A3AF',
    fontWeight: '500',
  },
  textDelivery: {
    fontSize: 16,
    color: '#22B74D',
    fontWeight: '500',
  },
  textPrice: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CartScreen;