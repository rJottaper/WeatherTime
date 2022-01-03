import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ backgroundColor, color, title }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.buttonTitle, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    width: '90%',
    height: 44,
    borderRadius: 10
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Button;

