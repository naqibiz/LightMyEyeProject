import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginRes, setLoginRes] = useState(null);
  const apiBaseURL = 'https://getboxxie.com/hannan/light_my_eye/public/api/';

  const onSubmit = async () => {
    if (!email) return console.log('email fields are required');
    if (!password) return console.log('password fields are required');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props?.navigation?.push('Profile');
    }, 3000);
    // try {
    //   const url = `${apiBaseURL}login`;
    //   let ApiParam = {
    //     email: email,
    //     password: password,
    //   };
    //   const options = {
    //     method: 'POST',
    //     data: ApiParam,
    //     url,
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   };
    //   const loginRes = await axios(options);
    //   console.log(loginRes, 'loginRes');
    //   setLoginRes(loginRes);
    // } catch (error) {
    //   setLoader(false);
    //   console.error(error.message);
    // }
  };

  return (
    <ScrollView style={styles.container}>
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
          {loading ? (
            <ActivityIndicator size="large" color="#5D63F9" />
          ) : (
            <Text style={styles.signuptxt}>Sign in</Text>
          )}
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.signuptxt}>Already have an account?</Text>
          <Pressable
            onPress={() => props.navigation.navigate('SignupVolunteer')}>
            <Text style={styles.alreadytxt}>sign up</Text>
          </Pressable>
        </View>
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
  alreadytxt: {
    fontSize: 15,
    color: '#0000EE',
    alignSelf: 'center',
    // fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
