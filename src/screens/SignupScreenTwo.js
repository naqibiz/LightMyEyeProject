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
} from 'react-native';

const SignupVolunteer = ({navigation}) => {
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
    return navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
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
              <Text style={styles.signuptxt}>Sign Up</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5D63F9',
    height: 730,
  },
  innerContainer: {
    marginTop: 22,
  },
  topheading: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25,
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
