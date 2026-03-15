import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { PIZZA_DATA } from "../constants/Pizza";

export default function PizzaDetailScreen() {
  const pizzaId = 7;
  const pizza = PIZZA_DATA.find(p => p.id === pizzaId) || PIZZA_DATA[0];

  return (
    <View style={styles.container}>
      <View style={styles.headerButtons}>
        <TouchableOpacity style={styles.iconBtn}>
          <Text style={styles.btnText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Text style={[styles.btnText, { color: '#FF6B03' }]}>♥</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: pizza.imageUrl }}
        style={styles.mainImage}
      />
      <View style={styles.contentCard}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleRow}>
            <Text style={styles.pizzaName}>
              {pizza.name.replace(' ', '\n')}
            </Text>
            <Text style={styles.price}>${pizza.options[0].price.toFixed(2)}</Text>
          </View>
          <Text style={styles.description}>
            {pizza.ingredients.join(', ')}.
          </Text>
          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.sizeRow}>
            {pizza.options.map((option, index) => (
              <View
                key={option.size}
                style={[
                  styles.sizeCard,
                  index === 1 && styles.activeSizeCard
                ]}
              >
                <Text style={[
                  styles.sizeLabel,
                  index === 1 && { color: '#FF6B03' }
                ]}>
                  {option.size === 'S' ? 'Small' : option.size === 'M' ? 'Medium' : 'Large'}
                </Text>
                <Text style={styles.sizeValue}>
                  {option.size === 'S' ? '10"' : option.size === 'M' ? '12"' : '14"'}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.bottomBar}>
          <View style={styles.counterContainer}>
            <TouchableOpacity style={styles.countBtn}><Text style={styles.countText}>—</Text></TouchableOpacity>
            <Text style={styles.quantity}>1</Text>
            <TouchableOpacity style={[styles.countBtn, { backgroundColor: '#FF6B03' }]}><Text style={styles.countText}>+</Text></TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addToCartBtn}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1008',
  },
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
    height: 300,
    resizeMode: 'contain',
    marginTop: -20,
  },
  contentCard: {
    flex: 1,
    backgroundColor: '#121212',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 25,
    marginTop: -40,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  pizzaName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 38,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6B03',
  },
  description: {
    fontSize: 16,
    color: '#94A3AF',
    lineHeight: 24,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  sizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sizeCard: {
    width: '30%',
    backgroundColor: '#1A1A1A',
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#262626',
  },
  activeSizeCard: {
    borderColor: '#FF6B03',
    borderWidth: 2,
  },
  sizeLabel: {
    color: '#5F636A',
    fontSize: 14,
    marginBottom: 5
  },
  sizeValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 20,
    padding: 8,
    width: '40%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#262626',
  },
  countBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  quantity: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  addToCartBtn: {
    backgroundColor: '#FF6B03',
    borderRadius: 20,
    paddingVertical: 18,
    width: '55%',
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
});