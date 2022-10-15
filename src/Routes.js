import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/HomeScreen';
import SignupBlind from './screens/SignupScreenOne';
import SignupVolunteer from './screens/SignupScreenTwo';
import LoginScreen from './screens/LoginScreen';
import Profile from './screens/ProfileScreen';
import ActiveVolunteers from './screens/ActiveVolunteers';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupBlind"
          component={SignupBlind}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupVolunteer"
          component={SignupVolunteer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ActiveVolunteers"
          component={ActiveVolunteers}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
