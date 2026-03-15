import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import AppButton from "../components/AppButton.tsx";

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/pizza.png')}
        resizeMode="cover"
      />
      <Text style={styles.title}>
        Delicious pizza {"\n"}
        <Text style={styles.highlightText}>
          at your door
        </Text>
      </Text>
      <Text style={styles.subtitle}>
        The fastest delivery in town. Hot, fresh,{"\n"} and incredibly tasty.
      </Text>

      <AppButton onPress={() => {}} title="Get Started" containerColor='#FF6B00' contentColor='white'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 40,
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#9EA1AB',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 50,
  },
  highlightText: {
    color: '#FF6B00'
  }
});

export default OnboardingScreen;