import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image } from 'react-native';
import PizzaCard from "../components/PizzaCard";
import { PIZZA_DATA } from "../constants/Pizza";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.nameText}>Alex Walker</Text>
        </View>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200' }}
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
          />
          <Text style={styles.filterIcon}>⊵</Text>
        </View>
      </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={PIZZA_DATA}
          renderItem={({ item }) => (
            <PizzaCard
              id={item.id}
              name={item.name}
              ingredients={item.ingredients.join(', ')}
              price={item.options[0].price}
              rating={item.rating}
              imageUrl={item.imageUrl}
            />
          )}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  welcomeText: {
    color: '#94A3AF',
    fontSize: 16,
  },
  nameText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
  searchContainer: {
    paddingHorizontal: 25,
    marginBottom: 40,
  },
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
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  filterIcon: {
    fontSize: 20,
    color: '#FF6B03',
  },
  flatListContent: {
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: 'center',
  },
});

export default HomeScreen;