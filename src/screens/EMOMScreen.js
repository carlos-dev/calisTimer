import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

const Select = ({ options, label, onSelect }) => {
  const [current, setCurrent] = useState('opt1');

  const handlePress = (opt) => () => {
    setCurrent(opt);

    console.log(opt);

    if (onSelect) {
      onSelect(opt);
    }
  };

  return (
    <View style={styles.select}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.options}>
        {options.map((opt) => (
          <TouchableOpacity
            key={opt}
            onPress={handlePress(opt)}
            style={[styles.button, opt === current ? styles.buttonSelected : null]}
          >
            <Text style={styles.option}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const EMOMScreen = () => (
  <View style={styles.container}>
    <Text>EMOMScreen</Text>
    <Select
      label="Alertas:"
      options={['desligado', '15s', '30s', '45s']}
      onSelect={(opt) => console.log(opt)}
    />
    <Select
      label="Contagem regressiva:"
      options={['sim', 'não']}
      onSelect={(opt) => console.log(opt)}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d6304a',
    flex: 1,
    paddingTop: 200,
  },

  label: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 24,
  },

  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  button: {
    padding: 8,
  },

  buttonSelected: {
    backgroundColor: 'rgba(255,255,255,0.6)',
  },

  option: {
    color: '#fff',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 24,
  },
});

export default EMOMScreen;
