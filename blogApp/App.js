import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import COLORS from './src/constants/colors';
import {Provider} from './src/context/BlogContext';
import MainNavigator from './src/navigator/MainNavigator';

const App = () => {
  return <MainNavigator />;
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
