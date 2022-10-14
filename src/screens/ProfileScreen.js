import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const Profile = ({navigation}) => {
  const onSubmit = () => {
    navigation.navigate('ActiveVolunteers');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Welcome Muhammad Naqi</Text>
      <Text style={styles.infotxt}>
        Get help for the visually impaired and low vision
      </Text>
      <ImageBackground
        source={require('../assets/allura-mobile.png')}
        resizeMode="cover"
        style={styles.image}></ImageBackground>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.activeassistance}
        onPress={() => onSubmit()}>
        <Text style={styles.activeassistancetxt}>Call To Assistance</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5D63F9',
    height: 730,
  },
  username: {
    color: '#fff',
    fontSize: 23,
    alignSelf: 'center',
    marginTop: 70,
    fontWeight: '700',
  },
  infotxt: {
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: 20,
    fontSize: 15,
    width: 230,
  },
  image: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 250,
    height: 250,
    marginTop: 35,
  },
  activeassistance: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 2,
    marginTop: 50,
    width: 250,
  },
  activeassistancetxt: {
    fontSize: 20,
    color: '#000000',
    alignSelf: 'center',
    fontWeight: '500',
    paddingVertical: 10,
  },
});

export default Profile;
