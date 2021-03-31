import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import RadioPlayer from '../screens/RadioPlayer';
import Routes from './routes';

const AppStack = createStackNavigator();

const AppStackNavigator: React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name={Routes.RADIO_PLAYER} component={RadioPlayer} />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
