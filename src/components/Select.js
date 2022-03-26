import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

const Select = ({
  options, label, onSelect, ...props
}) => {
  const [current, setCurrent] = useState('');

  useEffect(() => {
    setCurrent(props.current);
  }, []);

  const handlePress = (opt) => () => {
    setCurrent(opt);

    if (onSelect) {
      onSelect(opt);
    }
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.options}>
        {options.map((opt) => (
          <TouchableOpacity
            key={opt.id}
            onPress={handlePress(opt.id)}
            style={[styles.button, opt.id === current ? styles.buttonSelected : null]}
          >
            <Text style={styles.option}>{opt.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Select;
