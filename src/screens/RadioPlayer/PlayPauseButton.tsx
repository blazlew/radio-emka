import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, View} from 'react-native';
import Colors from '@config/constants/colors';
import commonStyles from '@config/constants/commonStyles';
import PauseIcon from '@assets/buttons/pause.svg';
import PlayIcon from '@assets/buttons/play.svg';

interface PlayPauseButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  isPaused: boolean;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({
  onPress,
  isPaused,
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
        {isPaused ? (
          <PlayIcon
            fill={Colors.TERTIARY}
            width={30}
            height={30}
            style={styles.marginLeft}
          />
        ) : (
          <PauseIcon fill={Colors.TERTIARY} width={30} height={30} />
        )}
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
    ...commonStyles.shadow,
  },
  pPButtonInner: {
    backgroundColor: Colors.PRIMARY,
    width: 82,
    aspectRatio: 1,
    borderRadius: 82 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: 5,
  },
});

export default PlayPauseButton;
