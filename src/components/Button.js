import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ title, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Text style={styles.textButton}>{title}</Text>
  </TouchableOpacity>
);

const styles = {
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 24,
  },
};

export default Button;
