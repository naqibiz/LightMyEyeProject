import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import AppRoutes from './src/Routes';

const RNRedux = () => <AppRoutes />;

AppRegistry.registerComponent(appName, () => RNRedux);
