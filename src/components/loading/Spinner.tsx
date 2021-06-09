import Colors from '@config/constants/colors';
import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

interface SpinnerProps extends ActivityIndicatorProps {
  color?: Colors;
}

const Spinner: React.FC<SpinnerProps> = ({
  color = Colors.TERTIARY,
  ...props
}) => {
  return <ActivityIndicator color={color} {...props} />;
};

export default Spinner;
