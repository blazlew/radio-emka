import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppStackNavigator from './navigation/AppStackNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
