import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import AppButton from "../components/AppButton.tsx";

const PhoneLoginScreen = () => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>
        Enter your phone number to login or register
      </Text>

      <View style={styles.cardInput}>
        <Text style={styles.cardText}>Phone Number</Text>
        <View style={styles.row}>
          <Text style={styles.cardTextNumber}>+1</Text>
          <View style={styles.divider}/>
          <TextInput
            style={styles.input}
            placeholder="555 123 4567"
            keyboardType="numeric"
            maxLength={10}
            onChangeText={newText => setText(newText)}
            defaultValue={text}
          />
        </View>
      </View>
      <View style={styles.spacer}/>
      <AppButton onPress={() => {}} title="Get Code" containerColor='#FF6B00' contentColor='white'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30,
  },
  subtitle: {
    color: '#9EA1AB',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 50,
  },
  cardInput: {
    backgroundColor: '#171717',
    width: '100%',
    borderColor: '#232323',
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 40,
  },
  cardText: {
    color: '#FF6B00',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardTextNumber: {
    color: 'white',
    fontSize: 18,
  },
  divider: {
    width: 2,
    height: 24,
    backgroundColor: '#3d444d',
    borderRadius: 1,
    marginHorizontal: 15,
  },
  input: {
    color: 'white',
    fontSize: 18,
  },
  spacer: {
    flex: 1,
  }
});

export default PhoneLoginScreen;