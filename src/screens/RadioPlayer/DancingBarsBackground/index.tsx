import Colors from '@config/constants/colors';
import {DANCING_BARS_COUNT} from '@config/constants/dancingBars';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Bar from './Bar';

const SEMI_TRANSPARENT_PRIMARY = `${Colors.PRIMARY}F2`;

interface DancingBarsBackgroundProps {
  shouldDance: boolean;
}

const DancingBarsBackground: React.FC<DancingBarsBackgroundProps> = ({
  children,
  shouldDance,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.barsContainer}>
        {[...Array(DANCING_BARS_COUNT).keys()].map(key => (
          <Bar shouldDance={shouldDance} key={key} />
        ))}
      </View>
      <LinearGradient
        colors={[
          SEMI_TRANSPARENT_PRIMARY,
          SEMI_TRANSPARENT_PRIMARY,
          Colors.PRIMARY,
        ]}
        locations={[0, 0.95, 1]}
        style={styles.gradient}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  barsContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default DancingBarsBackground;
