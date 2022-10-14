import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    if (!email) return console.log('email fields are required');
    if (!password) return console.log('password fields are required');
    return navigation.navigate('Profile');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/logo-transparent.png')}
        resizeMode="cover"
        style={styles.image}></ImageBackground>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputarea}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.inputarea}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.signinbtn}
          onPress={() => onSubmit()}>
          <Text style={styles.signuptxt}>Sign in</Text>
        </TouchableOpacity>
      </View>
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
    width: 250,
    height: 250,
    marginTop: 70,
  },
  inputContainer: {
    marginTop: 15,
  },
  inputarea: {
    backgroundColor: '#fff',
    marginHorizontal: 23,
    borderRadius: 10,
    paddingLeft: 15,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height: 57,
    marginBottom: 30,
  },
  signinbtn: {
    backgroundColor: '#FFFFFF',
    width: 200,
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 2,
    marginTop: 10,
  },
  signuptxt: {
    fontSize: 20,
    color: '#000000',
    alignSelf: 'center',
    fontWeight: '500',
  },
});

export default LoginScreen;
