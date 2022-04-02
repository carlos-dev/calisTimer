import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Time = ({ time, appendedText, type }) => {
  const minutes = parseInt((time / 60), 10);
  const seconds = parseInt(time % 60, 10);
  const format = (num) => (num < 10 ? `0${num}` : num);

  return (
    <Text style={styles[type || 'timer']}>
      {format(minutes)}
      :
      {format(seconds)}
      {' '}
      {appendedText}
    </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 96,
    color: '#fff',
    textAlign: 'center',
  },
  appendedText: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Time;
