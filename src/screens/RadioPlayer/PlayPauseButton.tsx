import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, View} from 'react-native';
import Colors from '../../config/constants/colors';
import commonStyles from '../../config/constants/commonStyles';

interface PlayPauseButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  isPaused: boolean;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({
  onPress,
  children,
}) => {
  return (
    <View style={styles.pPButtonOuter}>
      <Pressable
        onPress={onPress}
        style={styles.pPButtonInner}
        android_ripple={{
          color: Colors.RIPPLE,
          borderless: true,
        }}>
        {children}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pPButtonOuter: {
    backgroundColor: Colors.SECONDARY,
    width: 96,
    aspectRatio: 1,
    borderRadius: 96 / 2,
    borderWidth: 2,
    borderColor: Colors.TERTIARY,
    justifyContent: 'center',
    alignItems: 'center',
    ...commonStyles.buttonShadow,
  },
  pPButtonInner: {
    backgroundColor: Colors.PRIMARY,
    width: 82,
    aspectRatio: 1,
    borderRadius: 82 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlayPauseButton;
