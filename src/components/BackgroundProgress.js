import React, { useEffect, useState } from 'react';
import { View, Animated } from 'react-native';

import useComponentDidUpdate from '../hooks/useComponentDidUpdate';

const BackgroundProgress = ({ children, percentage }) => {
  const [animation] = useState(new Animated.Value(0));
  const prevCount = useComponentDidUpdate(percentage);

  useEffect(() => {
    // this one is your didupdate method for count variable
    if (percentage !== prevCount) {
      Animated.timing(animation, {
        toValue: percentage,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [percentage]);

  const heightIn = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  const heightOut = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['100%', '0%'],
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Animated.View style={{ height: heightOut, backgroundColor: '#d6304a' }} />
        <Animated.View style={{ height: heightIn, backgroundColor: '#2a0e12' }} />
      </View>
      <View style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, right: 0,
      }}
      >
        {children}
      </View>
    </View>
  );
};

export default BackgroundProgress;
