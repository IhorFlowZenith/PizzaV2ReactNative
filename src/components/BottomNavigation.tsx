import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useCart } from '../context/CartContext';

export default function BottomNavigation({ state, navigation }: BottomTabBarProps) {
  const { totalCount } = useCart();

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const getIcon = (name: string) => {
            switch (name) {
              case 'Home': return '🏠';
              case 'History': return '🕒';
              case 'Cart': return '🛍️';
              case 'Profile': return '👤';
              default: return '❓';
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tabItem}
            >
              <Text style={[styles.icon, isFocused && styles.activeIcon]}>
                {getIcon(route.name)}
              </Text>
              {isFocused && <View style={styles.activeDot} />}

              {route.name === 'Cart' && totalCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{totalCount}</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#0F0F0F',
    paddingBottom: 30,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#161616',
    marginHorizontal: 20,
    height: 80,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#262626',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
  },
  icon: {
    fontSize: 24,
    color: '#5F636A',
  },
  activeIcon: {
    color: '#FF6B03',
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF6B03',
    marginTop: 5,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: '#FF6B03',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#161616',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});