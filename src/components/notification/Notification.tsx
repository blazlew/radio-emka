import Colors from '@config/constants/colors';
import commonStyles from '@config/constants/commonStyles';
import {NotificaitonContext} from 'providers/NotificationProvider';
import React, {useContext, useEffect, useRef} from 'react';
import {StyleSheet, Text} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PADDING = 15;
const ANIMATION_BOUNCE_PADDING = 10;
const SLIDED_OUT_POSITION = -100;
const SLIDED_IN_POSITION = 0;
const VISIBILITY_TIME_MS = 700;

const Notification: React.FC = () => {
  let slideOutTimeoutId = useRef<NodeJS.Timeout>().current;
  const {notificationText, setNotificationText} = useContext(
    NotificaitonContext,
  );
  const {top: topAreaSafeInset} = useSafeAreaInsets();
  const notificationYPosition = useSharedValue(SLIDED_OUT_POSITION);

  const setSlideOutTimeout = () => {
    if (slideOutTimeoutId) {
      clearTimeout(slideOutTimeoutId);
    }
    slideOutTimeoutId = setTimeout(
      () => (notificationYPosition.value = SLIDED_OUT_POSITION),
      VISIBILITY_TIME_MS,
    );
  };

  const handleAnimationEnd = (isFinished: boolean) => {
    if (!isFinished) {
      return;
    }
    if (notificationYPosition.value === SLIDED_IN_POSITION) {
      setSlideOutTimeout();
    } else {
      setNotificationText(null);
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withSpring(
          notificationYPosition.value,
          {
            damping: 8,
            mass: 0.35,
          },
          isFinished => runOnJS(handleAnimationEnd)(isFinished),
        ),
      },
    ],
  }));

  useEffect(() => {
    if (notificationText !== null) {
      notificationYPosition.value = SLIDED_IN_POSITION;
    }
  }, [notificationText, notificationYPosition]);

  return (
    <Animated.View
      style={[
        {paddingTop: PADDING + topAreaSafeInset + ANIMATION_BOUNCE_PADDING},
        styles.container,
        animatedStyle,
      ]}>
      <Text style={styles.text}>{notificationText}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.shadow,
    ...StyleSheet.absoluteFillObject,
    top: -ANIMATION_BOUNCE_PADDING,
    bottom: undefined,
    paddingBottom: PADDING,
    paddingHorizontal: PADDING,
    backgroundColor: Colors.SECONDARY,
    borderColor: Colors.TERTIARY,
    borderBottomWidth: 2,
  },
  text: {
    color: Colors.TERTIARY,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Notification;
