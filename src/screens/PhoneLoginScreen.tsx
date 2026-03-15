import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AppButton from '../components/AppButton';
import { AuthStackParamList } from '../navigation/AuthNavigator';

type Nav = StackNavigationProp<AuthStackParamList, 'PhoneLogin'>;

const PhoneLoginScreen = () => {
  const [phone, setPhone] = useState('');
  const navigation = useNavigation<Nav>();

  const handleGetCode = () => {
    if (phone.length >= 10) {
      navigation.navigate('OtpVerification', { phone: `+1 ${phone}` });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Enter your phone number to login or register
        </Text>

        <View style={styles.cardInput}>
          <Text style={styles.cardText}>Phone Number</Text>
          <View style={styles.row}>
            <Text style={styles.cardTextNumber}>+1</Text>
            <View style={styles.divider} />
            <TextInput
              style={styles.input}
              placeholder="555 123 4567"
              placeholderTextColor="#5F636A"
              keyboardType="numeric"
              maxLength={10}
              onChangeText={setPhone}
              value={phone}
            />
          </View>
        </View>

        <View style={styles.spacer} />

        <AppButton
          onPress={handleGetCode}
          title="Get Code"
          containerColor={phone.length >= 10 ? '#FF6B00' : '#3A3A3A'}
          contentColor="white"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: '#0F0F0F' },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: { color: 'white', fontSize: 40, fontWeight: 'bold', marginTop: 30 },
  subtitle: { color: '#9EA1AB', fontSize: 18, marginTop: 10, marginBottom: 50 },
  cardInput: {
    backgroundColor: '#171717',
    borderColor: '#232323',
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardText: { color: '#FF6B00', fontWeight: 'bold' },
  row: { flexDirection: 'row', alignItems: 'center' },
  cardTextNumber: { color: 'white', fontSize: 18 },
  divider: {
    width: 2,
    height: 24,
    backgroundColor: '#3d444d',
    borderRadius: 1,
    marginHorizontal: 15,
  },
  input: { color: 'white', fontSize: 18, flex: 1 },
  spacer: { flex: 1, minHeight: 40 },
});

export default PhoneLoginScreen;
