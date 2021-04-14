import Spinner from '@components/loading/Spinner';
import Colors from '@config/constants/colors';
import commonStyles from '@config/constants/commonStyles';
import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

interface PosterProps {
  imageUrl: string;
}

const Poster: React.FC<PosterProps> = ({imageUrl}) => {
  return (
    <View style={styles.posterBorder}>
      <View style={styles.spinnerContainer}>
        <Spinner size="large" style={styles.spinner} />
        <Image
          source={
            imageUrl ? {uri: imageUrl} : require('@assets/logo/m-big.png')
          }
          style={styles.poster}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    height: Dimensions.get('window').width - 78,
    aspectRatio: 1,
  },
  spinnerContainer: {
    backgroundColor: Colors.PRIMARY,
  },
  spinner: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Poster;
