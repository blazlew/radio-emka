import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppStackNavigator from './navigation/AppStackNavigator';
import NotificationProvider from 'providers/NotificationProvider';
import Notification from '@components/notification/Notification';

const App = () => {
  return (
    <SafeAreaProvider>
      <NotificationProvider>
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
        <Notification />
      </NotificationProvider>
    </SafeAreaProvider>
  );
};

export default App;
