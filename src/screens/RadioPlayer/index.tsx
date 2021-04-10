import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Config from 'react-native-config';
import {SafeAreaView} from 'react-native-safe-area-context';
import Video from 'react-native-video';
import Colors from '@config/constants/colors';
import PlayPauseButton from './PlayPauseButton';
import commonStyles from '@config/constants/commonStyles';
import {useTrackMetadata} from '@hooks/useTrackMetadata';

const RadioPlayer: React.FC = () => {
  const [isPaused, setIsPaused] = useState(true);
  const trackMetaData = useTrackMetadata();
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.posterBorder}>
        <Video
          audioOnly
          playInBackground
          paused={isPaused}
          poster={trackMetaData.image}
          source={{
            uri: Config.RADIO_STREAM_URL,
          }}
          style={styles.poster}
          onBuffer={console.log} // TODO: add spinner while buffering, handle offline mode
          onError={console.log} // TODO: smth
        />
      </View>
      <Text style={styles.songName}>{trackMetaData?.name}</Text>
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
  posterBorder: {
    alignSelf: 'stretch',
    marginHorizontal: 30,
    padding: 7,
    borderWidth: 2,
    borderColor: Colors.TERTIARY,
    backgroundColor: Colors.SECONDARY,
    ...commonStyles.shadow,
  },
  poster: {
    aspectRatio: 1,
    backgroundColor: Colors.PRIMARY,
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
