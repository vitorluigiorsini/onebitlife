import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function DefaultButton({
  buttonText,
  handlePress,
  width,
  height,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { width: width, height: height }]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 20,
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
