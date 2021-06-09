import Colors from '@config/constants/colors';
import {
  DANCING_BAR_DANCE_ANIMATION_DURATION,
  DANCING_BAR_OUT_ANIMATION_DURATION,
} from '@config/constants/dancingBars';
import {getRandomPercentage} from '@utils/random';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface BarProps {
  shouldDance: boolean;
}

const Bar: React.FC<BarProps> = ({shouldDance}) => {
  const height = useSharedValue('0%');
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(
        height.value,
        {
          duration: shouldDance
            ? DANCING_BAR_DANCE_ANIMATION_DURATION
            : DANCING_BAR_OUT_ANIMATION_DURATION,
          easing: Easing.linear,
        },
        () => {
          if (shouldDance) {
            height.value = getRandomPercentage();
          }
        },
      ),
    };
  });
  useEffect(() => {
    if (shouldDance) {
      height.value = getRandomPercentage();
    } else {
      height.value = '0%';
    }
  }, [shouldDance, height]);

  return <Animated.View style={[styles.bar, animatedStyle]} />;
};

const styles = StyleSheet.create({
  bar: {
    backgroundColor: Colors.TERTIARY,
    flex: 1,
    marginHorizontal: 2,
    borderRadius: 3,
  },
});

export default Bar;
