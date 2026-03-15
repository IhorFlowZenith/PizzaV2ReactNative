import React from 'react';
import {ColorValue, StyleSheet, Text, TouchableOpacity} from "react-native";

interface Props {
  onPress: () => void;
  title: string;
  containerColor?: ColorValue;
  contentColor?: ColorValue;
}

export default function AppButton({onPress, title, containerColor, contentColor}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: containerColor}]}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={[styles.textButton, {color: contentColor}]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF6B00',
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  }
})