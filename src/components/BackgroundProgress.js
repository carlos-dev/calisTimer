import React from 'react';
import { View } from 'react-native';

const BackgroundProgress = ({ children, percentage }) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 - (percentage / 100), backgroundColor: '#d6304a' }} />
      <View style={{ flex: percentage / 100, backgroundColor: '#2a0e12' }} />
    </View>
    <View style={{
      position: 'absolute', left: 0, top: 0, bottom: 0, right: 0,
    }}
    >
      {children}
    </View>
  </View>
);

export default BackgroundProgress;
