import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = ({ title, subtitle, style }) => (
  <View style={[styles.container, style]}>
    <Text style={styles.title}>{title}</Text>
    <Text style={[styles.title, styles.subtitle]}>{subtitle}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingTop: 20,
  },

  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 48,
    color: '#fff',
    textAlign: 'center',
  },

  subtitle: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 14,
  },
});

export default Title;
