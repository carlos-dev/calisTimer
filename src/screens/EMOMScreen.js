import React from 'react';
import {
  View, StyleSheet, Text, TextInput, KeyboardAvoidingView,
} from 'react-native';
import Select from '../components/Select';
import Title from '../components/Title';
import Icon from '../utils/Icon';

const EMOMScreen = () => (
  <KeyboardAvoidingView style={{ flex: 1, flexGrow: 1 }} behavior="padding">
    <View style={styles.container}>
      <Title title="EMOM" subtitle="Every minute on the minute" />
      <Icon type="fa" name="cog" size={50} color="#fff" style={[styles.icon, styles.iconCog]} />
      <Select
        label="Alertas:"
        current={0}
        options={[
          { id: 0, label: 'desligado' },
          { id: 15, label: '15s' },
          { id: 30, label: '30s' },
          { id: 45, label: '45s' },
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
      <Text style={styles.text}>Quantos minutos:</Text>
      <TextInput style={styles.input} value="15" keyboardType="numeric" />
      <Text style={styles.text}>minutos</Text>
      <Icon type="fa" name="play" size={50} color="#fff" style={styles.icon} />
      <Text>Testar</Text>
    </View>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d6304a',
    flex: 1,
    paddingTop: 0,
  },

  icon: {
    alignSelf: 'center',
  },

  iconCog: {
    marginBottom: 17,
  },

  text: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 24,
  },

  input: {
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 48,
  },
});

export default EMOMScreen;
