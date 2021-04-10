import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Config from 'react-native-config';
import {SafeAreaView} from 'react-native-safe-area-context';
import Video from 'react-native-video';
import Colors from '../config/constants/colors';
import commonStyles from '../config/constants/commonStyles';

interface PlayPauseButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  paused: boolean;
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

const RadioPlayer: React.FC = () => {
  const [paused, setPaused] = useState(true);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Video
        audioOnly
        playInBackground
        paused={paused}
        poster="https://upload.wikimedia.org/wikipedia/commons/e/ec/John_Dunsworth.jpg" // TODO: add song posters
        source={{
          uri: Config.ESKA_LODZ_URL,
        }}
        style={styles.poster}
        onBuffer={console.log} // TODO: add spinner while buffering, handle offline mode
        onError={console.log} // TODO: smth
      />
      <PlayPauseButton onPress={() => setPaused(!paused)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.PRIMARY,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    // paddingBottom: 100,
  },
  poster: {
    alignSelf: 'stretch',
    marginHorizontal: 30,
    aspectRatio: 1,
    borderWidth: 1,
  },
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

export default RadioPlayer;
