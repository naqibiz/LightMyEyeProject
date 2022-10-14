import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/lifesavers-videocall.png')}
        resizeMode="cover"
        style={styles.image}></ImageBackground>
      <Text style={styles.identitytxt}>A Distant Identity</Text>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.homebtn}>
          <Text style={styles.signuptxt}>Unsighted and Low-Vision</Text>
          <Text style={styles.subtxtsignup}>
            My Vision needs your assistance
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homebtn}>
          <Text style={styles.signuptxt}>Sighted</Text>
          <Text style={styles.subtxtsignup}>
            I'd like to offer my eyeslight
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.learntxt}>Learn How Light my eyeslight</Text>
    </View>
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
    width: 300,
    height: 300,
    marginTop: 40,
  },
  identitytxt: {
    color: '#fff',
    alignSelf: 'center',
    marginTop: 10,
  },
  buttoncontainer: {
    marginTop: 25,
  },
  homebtn: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 25,
  },
  signuptxt: {
    fontSize: 20,
    color: '#000000',
    alignSelf: 'center',
  },
  subtxtsignup: {
    fontSize: 13,
    color: '#000000',
    alignSelf: 'center',
    paddingTop: 5,
  },
  learntxt: {
    color: '#fff',
    alignSelf: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 15,
  },
});

export default Home;
