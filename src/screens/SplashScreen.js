import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props?.navigation?.push('HomeScreen');
    }, 5000);
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/logo-transparent.png')}
          resizeMode="cover"
          style={styles.image}></ImageBackground>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5D63F9',
    height: 730,
  },
  image: {
    justifyContent: 'center',
    alignSelf: 'center',
    display: 'flex',
    width: 350,
    height: 350,
    marginVertical: 130,
  },
});

export default SplashScreen;
