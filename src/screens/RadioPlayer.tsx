import React from 'react';
import {Pressable, StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../config/constants/colors';
import commonStyles from '../config/constants/commonStyles';

const PlayPauseButton: React.FC = () => {
  return (
    <View style={styles.pPButtonOuter}>
      <View style={styles.pPButtonMid}>
        <Pressable
          style={styles.pPButtonInner}
          android_ripple={{
            color: Colors.RIPPLE,
            borderless: true,
          }}></Pressable>
      </View>
    </View>
  );
};

const RadioPlayer: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <PlayPauseButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.PRIMARY,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100,
  },
  pPButtonOuter: {
    backgroundColor: Colors.TERTIARY,
    width: 100,
    aspectRatio: 1,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    ...commonStyles.buttonShadow,
  },
  pPButtonMid: {
    backgroundColor: Colors.SECONDARY,
    width: 96,
    aspectRatio: 1,
    borderRadius: 96 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pPButtonInner: {
    backgroundColor: Colors.PRIMARY,
    width: 84,
    aspectRatio: 1,
    borderRadius: 84 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RadioPlayer;
