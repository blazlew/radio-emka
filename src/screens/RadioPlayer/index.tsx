import React, {useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import Config from 'react-native-config';
import {SafeAreaView} from 'react-native-safe-area-context';
import Video from 'react-native-video';
import Colors from '../../config/constants/colors';
import PlayPauseButton from './PlayPauseButton';

const RadioPlayer: React.FC = () => {
  const [isPaused, setIsPaused] = useState(true);
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
        paused={isPaused}
        poster="https://upload.wikimedia.org/wikipedia/commons/e/ec/John_Dunsworth.jpg" // TODO: add song posters
        source={{
          uri: Config.ESKA_LODZ_URL,
        }}
        style={styles.poster}
        onBuffer={console.log} // TODO: add spinner while buffering, handle offline mode
        onError={console.log} // TODO: smth
      />
      <PlayPauseButton
        onPress={() => setIsPaused(!isPaused)}
        isPaused={isPaused}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.PRIMARY,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  poster: {
    alignSelf: 'stretch',
    marginHorizontal: 30,
    aspectRatio: 1,
    borderWidth: 1,
  },
});

export default RadioPlayer;
