import {DANCING_BARS_COUNT} from '@config/constants/dancingBars';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Bar from './Bar';

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
});

export default DancingBarsBackground;
