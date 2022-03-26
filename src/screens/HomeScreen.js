import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';

const HomeScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CalisTimer</Text>
      <Button title="EMOM" onPress={() => navigation.navigate('EMOM')} style={styles.button} />
      <Button title="AMRAP" onPress={() => navigation.navigate('EMOM')} style={styles.button} />
      <Button title="Isometria" onPress={() => navigation.navigate('EMOM')} style={styles.button} />
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#d6304a',
    flex: 1,
  },

  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 48,
    textAlign: 'center',
    color: '#fff',
    marginVertical: 111,
  },

  button: {
    padding: 20,
  },

  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 24,
  },

};

export default HomeScreen;
