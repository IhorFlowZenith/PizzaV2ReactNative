import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppButton from "../components/AppButton.tsx";

const OtpVerificationScreen = () => {
  const [code] = useState(['', '', '', '']);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SMS Code</Text>
      <Text style={styles.subtitle}>
        We sent a 4-digit code to{"\n"}
        <Text style={styles.number}>+1 555 123 4567</Text>
      </Text>
      <View style={{ flexDirection: 'row', gap: 10, marginTop: 40}}>
        {code.map((digit, index) => (
          <View
            key={index}
            style={[
              styles.box,
              digit ? styles.activeBox : null
            ]}
          >
            <Text style={styles.text}>{digit}</Text>
          </View>
        ))}
      </View>
      <View style={{ flexDirection: 'row', gap: 10, marginTop: 20, marginBottom: 40}}>
        <Text style={styles.resendText}>Resend code in <Text style={styles.highlightText}>00:59</Text></Text>
      </View>
      <View style={styles.spacer}/>
      <AppButton onPress={() => {}} title="Verify" containerColor='#FF6B00' contentColor='white'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 50,
  },
  subtitle: {
    color: '#9EA1AB',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  number: {
    color: 'white',
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#121212',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeBox: {
    borderColor: '#FF7F00',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
  },
  resendText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  highlightText: {
    color: '#FF6B00'
  },
  spacer: {
    flex: 1,
  }
});

export default OtpVerificationScreen;