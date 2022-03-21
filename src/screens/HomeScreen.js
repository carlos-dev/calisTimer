import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <View>
      <TouchableHighlight onPress={() => navigation.navigate('EMOM')}>
        <Text>Home</Text>
      </TouchableHighlight>
    </View>
  );
};

export default HomeScreen;
