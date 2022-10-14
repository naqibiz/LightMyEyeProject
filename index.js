import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import SignupScreen from './src/screens/SignupScreen';
import {name as appName} from './app.json';

const RNRedux = () => (
    <App />
);

AppRegistry.registerComponent(appName, () => RNRedux);
