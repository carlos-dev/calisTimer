import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Time = ({ time }) => {
  const minutes = parseInt((time / 60), 10);
  const seconds = parseInt(time % 60, 10);
  const format = (num) => (num < 10 ? `0${num}` : num);
  return (
    <Text>
      {format(minutes)}
      :
      {format(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({});

export default Time;
