import React from "react"
import {Image, StyleSheet, Text, View} from "react-native";
import {OrderBadgeStyles, OrderStatus} from "../constants/Orderbadge.ts";
import {PIZZA_DATA} from "../constants/Pizza.ts";
import AppButton from "./AppButton.tsx";

interface OrderCardProps {
  orderNumber: string;
  date: string;
  status: OrderStatus;
  pizzaId: number;
}

export default function OrderCard({ orderNumber, date, status, pizzaId }: OrderCardProps) {
  const currentStyle = OrderBadgeStyles[status];
  const currentPizza = PIZZA_DATA.find(p => p.id === pizzaId) || PIZZA_DATA[0];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <View>
            <Text style={styles.dateText}>{date}</Text>
            <Text style={styles.orderText}>Order #{orderNumber}</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: currentStyle.backgroundColor }]}>
            <Text style={[styles.badgeText, {color: currentStyle.labelColor}]}>
              {currentStyle.label}
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={[styles.row, {flex: 1} ]}>
          <Image style={styles.pizzaImage} source={{uri: currentPizza.imageUrl}}/>
          <Text style={styles.pizzaName}>{currentPizza.name}</Text>
          <Text style={styles.pizzaPrice}>${currentPizza.options[0].price}</Text>
        </View>

        <AppButton onPress={() => {}} title='Reorder' containerColor='#2A2A2A' contentColor='white' />
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
    height:300,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#262626',
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badge: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,

  },
  badgeText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 14,
    fontWeight: "normal",
    color: '#94A3AF'
  },
  orderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#3d444d',
    borderRadius: 1,
    marginVertical: 15,
  },
  pizzaImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  pizzaName: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'white',
  },
  pizzaPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#FF6B03',
  },
})