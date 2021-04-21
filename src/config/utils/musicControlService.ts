import MusicControl from 'react-native-music-control';

export const setupMusicControlNotification = () => {
  MusicControl.setNowPlaying({
    title: 'Radio emka',
    artwork: require('@assets/logo/m-big.png'),
    colorized: true,
    isLiveStream: true,
  });
  MusicControl.enableBackgroundMode(true);
  MusicControl.enableControl('play', true);
  MusicControl.enableControl('pause', true);
  MusicControl.enableControl('stop', true);
};
