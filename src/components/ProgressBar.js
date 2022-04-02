import React from 'react';
import { View } from 'react-native';

const ProgressBar = ({ color, percentage, height }) => (
  <View style={{ width: `${percentage}%` || '2%', backgroundColor: color || '#fff', height: height || 3 }} />
);

export default ProgressBar;
