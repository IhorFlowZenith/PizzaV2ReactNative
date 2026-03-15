import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CartCard from '../components/CartCard';
import AppButton from '../components/AppButton';
import { useCart } from '../context/CartContext';

const CartScreen = () => {
  const { cartItems, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>🛍️</Text>
        <Text style={styles.emptyTitle}>Cart is empty</Text>
        <Text style={styles.emptySubtitle}>
          Add some pizzas to get started!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartCard itemId={item.id} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.textPrice}>${totalPrice.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.textDelivery}>Free</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
        </View>
      </View>

      <AppButton
        title="Checkout"
        onPress={() => {}}
        containerColor="#FF6B00"
        contentColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    paddingHorizontal: 20,
    paddingBottom: 110,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  emptyIcon: { fontSize: 60 },
  emptyTitle: { fontSize: 24, fontWeight: 'bold', color: 'white' },
  emptySubtitle: { fontSize: 16, color: '#5F636A' },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 60,
    paddingBottom: 20,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#1A1A1A',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#262626',
    marginBottom: 16,
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  totalText: { fontSize: 18, color: '#94A3AF', fontWeight: '500' },
  totalPrice: { fontSize: 28, color: '#FF6B03', fontWeight: 'bold' },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#3d444d',
    borderRadius: 1,
    marginVertical: 12,
  },
  text: { fontSize: 14, color: '#94A3AF' },
  textDelivery: { fontSize: 16, color: '#22B74D', fontWeight: '500' },
  textPrice: { fontSize: 16, color: 'white', fontWeight: 'bold' },
});

export default CartScreen;
