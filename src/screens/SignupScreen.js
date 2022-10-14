import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SignupScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loader, setLoader] = useState(false);

  const onSubmit = () => {
    setLoader(true);
    const url = `${apiActiveURL}register`;
    let ApiParam = {
      name: name,
      email: email,
      date_of_birth: dob,
      gender: gender,
      language: language,
      role_id: 1,
      password: password,
      phone: phone,
    };
    const options = {
      method: "POST",
      data: ApiParam,
      url,
    };

    axios(options)
      .then((res) => {
        console.log("registered user", res);
      })
      .then(() => setLoader(false))
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.topheading}>Unsighted Sign up</Text>
      <View style={styles.innerContainer}>
      <ScrollView>
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
            onChangeText={setPhone}
            value={phone}
            placeholder="Language"
          />
          <TextInput
            style={styles.inputarea}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.signupbtn}
          onPress={() => onSubmit()}>
          <Text style={styles.signuptxt}>Sign Up</Text>
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
  innerContainer: {
    marginTop: 20,
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
    height: 57,
    marginBottom: 20,
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
export default SignupScreen;
