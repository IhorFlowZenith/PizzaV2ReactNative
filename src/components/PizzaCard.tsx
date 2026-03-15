import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';

interface PizzaCardProps {
  id: number;
  name: string;
  ingredients: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export default function PizzaCard({id, name, ingredients, price, rating, imageUrl }: PizzaCardProps) {
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.pizzaImage} />

      <View style={styles.card}>

        <View style={styles.headerRow}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.ratingBox}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>

        <Text style={styles.ingredientsText} numberOfLines={2}>
          {ingredients}
        </Text>

        <View style={styles.footerRow}>
          <Text style={styles.priceText}>${price.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addToCart({ id, name, price, imageUrl })}>
            <Text style={styles.plusIcon}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#161616',
    borderRadius: 35,
    padding: 20,
    width: '100%',
    paddingTop: 70,
  },
  pizzaImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: -60,
    zIndex: 1,
    resizeMode: 'contain',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: '#FF6B03',
    fontSize: 18,
    marginRight: 4,
  },
  ratingText: {
    color: '#FF6B03',
    fontWeight: 'bold',
    fontSize: 16,
  },
  ingredientsText: {
    color: '#5F636A',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  addButton: {
    backgroundColor: '#FF6B03',
    width: 50,
    height: 50,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    color: 'white',
    fontSize: 28,
    fontWeight: '300',
  },
});