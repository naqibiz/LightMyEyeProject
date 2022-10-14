import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
