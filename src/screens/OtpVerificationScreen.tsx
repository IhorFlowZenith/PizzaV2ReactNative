import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import AppButton from '../components/AppButton';
import { useAuth } from '../context/AuthContext';
import { AuthStackParamList } from '../navigation/AuthNavigator';

type Route = RouteProp<AuthStackParamList, 'OtpVerification'>;

const OTP_LENGTH = 4;

const OtpVerificationScreen = () => {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const inputs = useRef<(TextInput | null)[]>([]);
  const { login } = useAuth();
  const route = useRoute<Route>();
  const phone = route.params?.phone ?? '+1 555 123 4567';

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    // Перейти до наступного поля
    if (text && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Повернутись до попереднього поля при видаленні
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every(d => d !== '');

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity style={styles.backBtn} onPress={() => {}}>
          <Text style={styles.backText}>{'←'}</Text>
        </TouchableOpacity>

        <Text style={styles.title}>SMS Code</Text>
        <Text style={styles.subtitle}>
          We sent a 4-digit code to{'\n'}
          <Text style={styles.number}>{phone}</Text>
        </Text>

        {/* OTP поля */}
        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputs.current[index] = ref)}
              style={[styles.box, digit ? styles.activeBox : null]}
              value={digit}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
              selectionColor="#FF6B00"
              caretHidden
            />
          ))}
        </View>

        <Text style={styles.resendText}>
          Resend code in <Text style={styles.highlightText}>00:59</Text>
        </Text>

        <View style={styles.spacer} />

        <AppButton
          onPress={login}
          title="Verify"
          containerColor={isComplete ? '#FF6B00' : '#3A3A3A'}
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  backBtn: {
    alignSelf: 'flex-start',
    padding: 10,
    marginBottom: 10,
  },
  backText: { color: 'white', fontSize: 24 },
  title: { color: 'white', fontSize: 40, fontWeight: 'bold', marginTop: 20 },
  subtitle: {
    color: '#9EA1AB',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  number: { color: 'white' },
  otpRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 40,
    marginBottom: 20,
  },
  box: {
    width: 75,
    height: 75,
    backgroundColor: '#121212',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#262626',
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  activeBox: { borderColor: '#FF6B00' },
  resendText: { color: 'white', fontSize: 16, marginTop: 10 },
  highlightText: { color: '#FF6B00' },
  spacer: { flex: 1, minHeight: 40 },
});

export default OtpVerificationScreen;
