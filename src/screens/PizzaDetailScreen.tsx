import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { PIZZA_DATA } from '../constants/Pizza';
import { useCart } from '../context/CartContext';
import { HomeStackParamList } from '../screens/HomeScreen';

type Route = RouteProp<HomeStackParamList, 'PizzaDetail'>;

export default function PizzaDetailScreen() {
  const route = useRoute<Route>();
  const navigation = useNavigation();
  const { addToCart } = useCart();

  const pizza =
    PIZZA_DATA.find(p => p.id === route.params.pizzaId) ?? PIZZA_DATA[0];

  const [selectedIndex, setSelectedIndex] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const selectedOption = pizza.options[selectedIndex];
  const total = (selectedOption.price * quantity).toFixed(2);

  const handleAddToCart = () => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: selectedOption.price,
      imageUrl: pizza.imageUrl,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerButtons}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.btnText}>{'←'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Text style={[styles.btnText, { color: '#FF6B03' }]}>♥</Text>
        </TouchableOpacity>
      </View>

      <Image source={{ uri: pizza.imageUrl }} style={styles.mainImage} />

      <View style={styles.contentCard}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleRow}>
            <Text style={styles.pizzaName}>{pizza.name}</Text>
            <Text style={styles.price}>${selectedOption.price.toFixed(2)}</Text>
          </View>

          <Text style={styles.description}>{pizza.description}</Text>

          <Text style={styles.sectionTitle}>Ingredients</Text>
          <Text style={styles.ingredients}>
            {pizza.ingredients.join(' · ')}
          </Text>

          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.sizeRow}>
            {pizza.options.map((option, index) => (
              <TouchableOpacity
                key={option.size}
                onPress={() => setSelectedIndex(index)}
                style={[
                  styles.sizeCard,
                  index === selectedIndex && styles.activeSizeCard,
                ]}
              >
                <Text
                  style={[
                    styles.sizeLabel,
                    index === selectedIndex && { color: '#FF6B03' },
                  ]}
                >
                  {option.size === 'S'
                    ? 'Small'
                    : option.size === 'M'
                    ? 'Medium'
                    : 'Large'}
                </Text>
                <Text style={styles.sizeValue}>
                  {option.size === 'S'
                    ? '10"'
                    : option.size === 'M'
                    ? '12"'
                    : '14"'}
                </Text>
                <Text style={styles.sizeWeight}>{option.weight}g</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View style={styles.bottomBar}>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              style={styles.countBtn}
              onPress={() => setQuantity(q => Math.max(1, q - 1))}
            >
              <Text style={styles.countText}>—</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              style={[styles.countBtn, { backgroundColor: '#FF6B03' }]}
              onPress={() => setQuantity(q => q + 1)}
            >
              <Text style={styles.countText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.addToCartBtn}
            onPress={handleAddToCart}
          >
            <Text style={styles.addToCartText}>Add ${total}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1C1008' },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    zIndex: 10,
  },
  iconBtn: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  mainImage: {
    width: '100%',
    height: 280,
    resizeMode: 'contain',
    marginTop: -10,
  },
  contentCard: {
    flex: 1,
    backgroundColor: '#121212',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 25,
    marginTop: -30,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  pizzaName: { fontSize: 28, fontWeight: 'bold', color: 'white', flex: 1 },
  price: { fontSize: 26, fontWeight: 'bold', color: '#FF6B03' },
  description: {
    fontSize: 15,
    color: '#94A3AF',
    lineHeight: 22,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  ingredients: {
    fontSize: 14,
    color: '#5F636A',
    marginBottom: 20,
    lineHeight: 22,
  },
  sizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sizeCard: {
    width: '30%',
    backgroundColor: '#1A1A1A',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#262626',
  },
  activeSizeCard: { borderColor: '#FF6B03', borderWidth: 2 },
  sizeLabel: { color: '#5F636A', fontSize: 13, marginBottom: 4 },
  sizeValue: { color: 'white', fontSize: 17, fontWeight: 'bold' },
  sizeWeight: { color: '#5F636A', fontSize: 12, marginTop: 2 },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 18,
    padding: 8,
    width: '38%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#262626',
  },
  countBtn: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  quantity: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  addToCartBtn: {
    backgroundColor: '#FF6B03',
    borderRadius: 18,
    paddingVertical: 16,
    width: '58%',
    alignItems: 'center',
  },
  addToCartText: { color: 'white', fontSize: 17, fontWeight: 'bold' },
});
