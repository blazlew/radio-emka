import Colors from '@config/constants/colors';
import {NotificaitonContext} from 'providers/NotificationProvider';
import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

interface TrackTitleProps {
  children: string;
}

const TrackTitle: React.FC<TrackTitleProps> = ({children}) => {
  const {setNotificationText} = useContext(NotificaitonContext);
  const copyToClipboard = () => {
    Clipboard.setString(children);
    setNotificationText('Copied! ✂');
  };
  return (
    <Text style={styles.songName} onLongPress={copyToClipboard}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  songName: {
    color: Colors.TERTIARY,
    fontSize: 26,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: {height: 1, width: 0},
    textShadowRadius: 2,
  },
});

export default TrackTitle;
