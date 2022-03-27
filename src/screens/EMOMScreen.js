import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, TextInput, KeyboardAvoidingView, ScrollView,
  Keyboard,
} from 'react-native';
import Select from '../components/Select';
import Title from '../components/Title';
import Icon from '../utils/Icon';

const EMOMScreen = () => {
  const [keyboardIsVisibile, setKeyboardIsVisibile] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setKeyboardIsVisibile(true));
    Keyboard.addListener('keyboardDidHide', () => setKeyboardIsVisibile(false));

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  return (
    <KeyboardAvoidingView style={{ flex: 1, flexGrow: 1, backgroundColor: '#595' }}>
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <Title title="EMOM" subtitle="Every minute on the minute" style={{ paddingTop: keyboardIsVisibile ? 20 : 150 }} />
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d6304a',
    flex: 1,
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
