import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from 'react-native';

const SignupVolunteer = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [language, setLanguage] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [cnic, setCnic] = useState('');
  const [loader, setLoader] = useState(false);
  const apiBaseURL = 'https://getboxxie.com/hannan/light_my_eye/public/api/';

  const onSubmit = () => {
    if (!name) return console.log('name fields are required');
    if (!email) return console.log('email fields are required');
    if (!dob) return console.log('dob fields are required');
    if (!gender) return console.log('gender fields are required');
    if (!language) return console.log('language fields are required');
    if (!cnic) return console.log('cnic fields are required');
    if (!password) return console.log('password fields are required');
    if (!confirmpassword)
      return console.log('confirmpassword fields are required');
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      props?.navigation?.push('LoginScreen');
    }, 3000);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.topheading}>Sighted Sign up</Text>
      <View style={styles.innerContainer}>
        <SafeAreaView>
          <KeyboardAvoidingView behavior="padding">
            <TextInput
              style={styles.inputarea}
              onChangeText={setName}
              value={name}
              placeholder="UserName"
            />
            <TextInput
              style={styles.inputarea}
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
            />
            <TextInput
              style={styles.inputarea}
              onChangeText={setDob}
              value={dob}
              placeholder="Date of Birth"
            />
            <TextInput
              style={styles.inputarea}
              onChangeText={setGender}
              value={gender}
              placeholder="Gender"
            />
            <TextInput
              style={styles.inputarea}
              onChangeText={setLanguage}
              value={language}
              placeholder="Language"
            />
            <TextInput
              style={styles.inputarea}
              onChangeText={setCnic}
              value={cnic}
              placeholder="CNIC"
            />
            <TextInput
              style={styles.inputarea}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.inputarea}
              onChangeText={setConfirmPassword}
              value={confirmpassword}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.signupbtn}
              onPress={() => onSubmit()}>
              {loader ? (
                <ActivityIndicator size="large" color="#5D63F9" />
              ) : (
                <Text style={styles.signuptxt}>Sign Up</Text>
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
                onPress={() => props.navigation.navigate('LoginScreen')}>
                <Text style={styles.alreadytxt}>Login</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5D63F9',
    height: 730,
  },
  innerContainer: {
    marginTop: 18,
  },
  topheading: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 18,
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
    height: 55,
    marginBottom: 15,
  },
  inputareatxt: {
    paddingVertical: 20,
  },
  signupbtn: {
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
    fontWeight: '600',
  },
});
export default SignupVolunteer;
