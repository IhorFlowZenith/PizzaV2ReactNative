import React from "react"
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PIZZA_DATA} from "../constants/Pizza.ts";

interface CartCardProps {
  pizzaId: number;
}

export default function CartCard({ pizzaId }: CartCardProps) {
  const currentPizza = PIZZA_DATA.find(p => p.id === pizzaId) || PIZZA_DATA[0];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Image style={styles.pizzaImage} source={{uri: currentPizza.imageUrl}}/>
          <View style={[{flex: 1} ]}>
            <Text style={styles.pizzaName}>{currentPizza.name}</Text>
            <Text style={styles.pizzaSize}>{currentPizza.options[0].size}</Text>
            <Text style={styles.pizzaPrice}>${currentPizza.options[0].price}</Text>
          </View>

          <View style={styles.countCard}>
            <TouchableOpacity><Text style={styles.countPlus}>+</Text></TouchableOpacity>
            <Text style={styles.countText}>1</Text>
            <TouchableOpacity><Text style={styles.countMinus}>-</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#0F0F0F",
    width: "100%",
  },
  card: {
    padding: 25,
    backgroundColor: "#1A1A1A",
    width: "100%",
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#262626',
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15
  },
  pizzaImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  pizzaName: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'white',
  },
  pizzaSize: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#5F636A',
  },
  pizzaPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#FF6B03',
  },
  countCard: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    alignItems: "center",
  },
  countPlus: {
    fontSize: 20,
    color: '#DC6007',
  },
  countText: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
  },
  countMinus: {
    fontSize: 20,
    color: '#7C818A',
  }
})