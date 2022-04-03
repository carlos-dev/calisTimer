import React, { useEffect, useState, useRef } from 'react';
import { Animated } from 'react-native';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const ProgressBar = ({ color, percentage, height }) => {
  const [animation] = useState(new Animated.Value(0));
  const prevCount = usePrevious(percentage);

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

  const width = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <Animated.View style={{ width, backgroundColor: color || '#fff', height: height || 3 }} />
  );
};

export default ProgressBar;
