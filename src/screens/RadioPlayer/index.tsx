import React, {useEffect, useState} from 'react';
import {BackHandler, StatusBar, StyleSheet, Text} from 'react-native';
import Config from 'react-native-config';
import {SafeAreaView} from 'react-native-safe-area-context';
import Video from 'react-native-video';
import Colors from '@config/constants/colors';
import PlayPauseButton from './PlayPauseButton';
import {useTrackMetadata} from '@hooks/useTrackMetadata';
import Poster from './Poster';
import {setupMusicControlNotification} from '@config/utils/musicControlService';
import MusicControl, {Command} from 'react-native-music-control';

const RadioPlayer: React.FC = () => {
  const [isPaused, setIsPaused] = useState(true);
  const trackMetaData = useTrackMetadata();

  useEffect(() => {
    setupMusicControlNotification();
    configureNotificationListeners();
  }, []);

  useEffect(() => {
    MusicControl.setNowPlaying({
      title: trackMetaData.name,
      artwork: trackMetaData.image,
    });
  }, [trackMetaData.image, trackMetaData.name]);

  const configureNotificationListeners = () => {
    MusicControl.on(Command.play, () => {
      setIsPaused(false);
      MusicControl.updatePlayback({
        state: MusicControl.STATE_PLAYING,
      });
    });
    MusicControl.on(Command.pause, () => {
      setIsPaused(true);
      MusicControl.updatePlayback({
        state: MusicControl.STATE_PAUSED,
      });
    });
    MusicControl.on(Command.stop, () => {
      setIsPaused(true);
      BackHandler.exitApp();
    });
  };

  const toggleIsPaused = () => {
    MusicControl.updatePlayback({
      state: isPaused ? MusicControl.STATE_PLAYING : MusicControl.STATE_PAUSED,
    });
    setIsPaused(!isPaused);
  };

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
        muted={isPaused}
        source={{
          uri: Config.RADIO_STREAM_URL,
        }}
        style={styles.audioPlayer}
        onBuffer={console.log} // TODO: add spinner while buffering, handle offline mode
        onError={console.log} // TODO: smth
      />
      <Poster imageUrl={trackMetaData.image} />
      <Text style={styles.songName}>{trackMetaData?.name}</Text>
      <PlayPauseButton onPress={toggleIsPaused} isPaused={isPaused} />
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
  audioPlayer: {
    position: 'absolute',
    top: -1,
  },
  songName: {
    color: Colors.TERTIARY,
    fontSize: 26,
    textShadowColor: '#000',
    textShadowOffset: {height: 1, width: 0},
    textShadowRadius: 2,
  },
});

export default RadioPlayer;
