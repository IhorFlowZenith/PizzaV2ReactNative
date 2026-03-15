import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCart } from '../context/CartContext';

interface CartCardProps {
  itemId: number;
}

export default function CartCard({ itemId }: CartCardProps) {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const item = cartItems.find(i => i.id === itemId);

  if (!item) return null;

  const handleIncrease = () => updateQuantity(item.id, 1);
  const handleDecrease = () => {
    if (item.quantity === 1) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, -1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Image style={styles.pizzaImage} source={{ uri: item.imageUrl }} />

          <View style={{ flex: 1 }}>
            <Text style={styles.pizzaName}>{item.name}</Text>
            <Text style={styles.pizzaPrice}>${item.price.toFixed(2)}</Text>
          </View>

          <View style={styles.countCard}>
            <TouchableOpacity onPress={handleIncrease}>
              <Text style={styles.countPlus}>+</Text>
            </TouchableOpacity>
            <Text style={styles.countText}>{item.quantity}</Text>
            <TouchableOpacity onPress={handleDecrease}>
              <Text style={styles.countMinus}>−</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    width: '100%',
  },
  card: {
    padding: 20,
    backgroundColor: '#1A1A1A',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#262626',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  pizzaImage: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  pizzaName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 6,
  },
  pizzaPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B03',
  },
  countCard: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#2A2A2A',
    borderRadius: 14,
    alignItems: 'center',
    gap: 6,
  },
  countPlus: {
    fontSize: 22,
    color: '#FF6B03',
    fontWeight: 'bold',
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    minWidth: 20,
    textAlign: 'center',
  },
  countMinus: {
    fontSize: 22,
    color: '#7C818A',
    fontWeight: 'bold',
  },
});