import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';

import Select from '../components/Select';
import Title from '../components/Title';

const EMOMScreen = () => (
  <View style={styles.container}>
    <Title title="EMOM" subtitle="Every minute on the minute" />
    <Select
      label="Alertas:"
      current={0}
      options={[
        {
          id: 0,
          label: 'desligado',
        },
        {
          id: 15,
          label: '15s',
        },
        {
          id: 30,
          label: '30s',
        },
        {
          id: 45,
          label: '45s',
        },
      ]}
      onSelect={(opt) => console.log(opt)}
    />
    <Select
      label="Contagem regressiva:"
      current={0}
      options={[
        { id: 1, label: 'sim' },
        { id: 0, label: 'não' },
      ]}
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
});

export default EMOMScreen;
