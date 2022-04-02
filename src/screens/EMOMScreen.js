import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, TextInput, KeyboardAvoidingView, ScrollView,
  Keyboard, View, TouchableOpacity,
} from 'react-native';
import BackgroundProgress from '../components/BackgroundProgress';
import ProgressBar from '../components/ProgressBar';
import Select from '../components/Select';
import Time from '../components/Time';
import Title from '../components/Title';
import Icon from '../utils/Icon';

const EMOMScreen = () => {
  const [keyboardIsVisibile, setKeyboardIsVisibile] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [alerts, setAlerts] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [count, setCount] = useState(0);
  const [countdownValue, setCountdownValue] = useState(5);
  const [time, setTime] = useState('2');

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setKeyboardIsVisibile(true));
    Keyboard.addListener('keyboardDidHide', () => setKeyboardIsVisibile(false));
    // handleStart();

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  const incrementCount = () => {
    const countTimer = setInterval(() => setCount((second) => {
      if (second === (parseInt(time, 10) * 60) - 1) {
        clearInterval(countTimer);
      }
      return second + 1;
    }), 100);
  };

  const resetTime = (interval) => {
    clearInterval(interval);
    incrementCount();
  };

  const handleStart = () => {
    setIsRunning(true);

    const interval = setInterval(() => {
      setCountdownValue((lastTimerCount) => {
        if (countdown === 0 && lastTimerCount === 5) {
          resetTime(interval);
        } else if (lastTimerCount <= 1) {
          resetTime(interval);
        }

        if (countdown > 0) {
          return lastTimerCount - 1;
        }

        return lastTimerCount;
      });
    }, 1000); // each count lasts for a second
      // cleanup the interval on complete
    return () => clearInterval(interval);
  };

  if (isRunning) {
    const percMinute = parseInt(((count % 60) / 60) * 100, 10);
    const percTime = parseInt(((count / 60) / parseInt(time, 10)) * 100, 10);
    return (
      <BackgroundProgress percentage={percMinute}>
        <View style={[styles.container, { justifyContent: 'center' }]}>
          <Text>
            countdown:
            {' '}
            {countdownValue}
          </Text>
          <Text>
            count:
            {' '}
            {count}
          </Text>
          <Time time={count} />
          <ProgressBar percentage={percTime} />
          <Time time={parseInt(time, 10) * 60 - count} type="appendedText" appendedText="restantes" />
          <Text>
            minute:
            {' '}
            {percMinute}
          </Text>
          <Text>
            Time:
            {' '}
            {percTime}
          </Text>
        </View>
      </BackgroundProgress>
    );
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1, flexGrow: 1, backgroundColor: '#595' }}>
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <Title title="EMOM" subtitle="Every minute on the minute" style={{ paddingTop: keyboardIsVisibile ? 20 : 140 }} />
        <Icon type="fa" name="cog" size={50} color="#fff" style={[styles.icon, styles.iconCog]} />
        <Select
          label="Alertas:"
          current={alerts}
          options={[
            { id: 0, label: 'desligado' },
            { id: 15, label: '15s' },
            { id: 30, label: '30s' },
            { id: 45, label: '45s' },
          ]}
          onSelect={(opt) => setAlerts(opt)}
        />
        <Select
          label="Contagem regressiva:"
          current={countdown}
          options={[
            { id: 1, label: 'sim' },
            { id: 0, label: 'não' },
          ]}
          onSelect={(opt) => setCountdown(opt)}
        />
        <Text style={styles.text}>Quantos minutos:</Text>
        <TextInput style={styles.input} value={time} keyboardType="numeric" onChangeText={(text) => setTime(text)} />
        <Text style={styles.text}>minutos</Text>
        <TouchableOpacity onPress={handleStart}>
          <Icon type="fa" name="play" size={50} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <Text>Testar</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
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
