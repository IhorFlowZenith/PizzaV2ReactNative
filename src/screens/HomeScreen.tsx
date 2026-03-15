import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import PizzaCard from '../components/PizzaCard';
import { PIZZA_DATA } from '../constants/Pizza';

export type HomeStackParamList = {
  HomeScreen: undefined;
  PizzaDetail: { pizzaId: number };
};

type Nav = StackNavigationProp<HomeStackParamList, 'HomeScreen'>;

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<Nav>();

  const filtered = PIZZA_DATA.filter(
    pizza =>
      pizza.name.toLowerCase().includes(search.toLowerCase()) ||
      pizza.ingredients.some(i =>
        i.toLowerCase().includes(search.toLowerCase()),
      ),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.nameText}>Alex Walker</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200',
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            placeholder="Find your favorite pizza..."
            placeholderTextColor="#5F636A"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Text style={styles.clearIcon}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {filtered.length === 0 ? (
        <View style={styles.noResults}>
          <Text style={styles.noResultsText}>No pizzas found 🍕</Text>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filtered}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate('PizzaDetail', { pizzaId: item.id })
              }
            >
              <PizzaCard
                id={item.id}
                name={item.name}
                ingredients={item.ingredients.join(', ')}
                price={item.options[0].price}
                rating={item.rating}
                imageUrl={item.imageUrl}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F0F', paddingTop: 60 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  welcomeText: { color: '#94A3AF', fontSize: 16 },
  nameText: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  avatar: { width: 55, height: 55, borderRadius: 27.5 },
  searchContainer: { paddingHorizontal: 25, marginBottom: 20 },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161616',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 60,
    borderWidth: 1,
    borderColor: '#262626',
  },
  searchIcon: { fontSize: 18, marginRight: 10 },
  searchInput: { flex: 1, color: 'white', fontSize: 16 },
  clearIcon: { color: '#5F636A', fontSize: 18, paddingHorizontal: 5 },
  flatListContent: {
    paddingHorizontal: 25,
    alignItems: 'center',
    paddingBottom: 120,
  },
  noResults: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  noResultsText: { color: '#5F636A', fontSize: 20 },
});

export default HomeScreen;
