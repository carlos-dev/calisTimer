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

  useEffect(() => {
    if (onSelect && Array.isArray(current)) {
      onSelect(current);
    }
  }, [current]);

  const checkItem = (item) => {
    if (Array.isArray(current)) {
      return current.indexOf(item) >= 0;
    }
    return current === item;
  };

  const handlePress = (opt) => () => {
    if (Array.isArray(current)) {
      if (current.indexOf(opt) >= 0) {
        setCurrent(current.filter((item) => item !== opt));
      } else {
        setCurrent([...current, opt]);
      }
    } else {
      setCurrent(opt);
      if (onSelect) {
        onSelect(opt);
      }
    }
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.options}>
        {options.map((opt) => {
          checkItem(opt.id);

          return (
            <TouchableOpacity
              key={opt.id}
              onPress={handlePress(opt.id)}
              style={[styles.button, checkItem(opt.id) ? styles.buttonSelected : null]}
            >
              <Text style={styles.option}>{opt.label}</Text>
            </TouchableOpacity>
          );
        })}
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
