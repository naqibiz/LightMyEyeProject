import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const ActiveVolunteers = ({navigation}) => {
  const activeVolunteer = [
    {id: 1, name: 'Simon Anthony'},
    {id: 2, name: 'Muhammad Naqi'},
    {id: 4, name: 'Sidra Zahra'},
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/logo-transparent.png')}
          resizeMode="cover"
          style={styles.image}></ImageBackground>
      </View>
      <View style={styles.activeuserContainer}>
        {activeVolunteer.map((use, index) => (
          <View key={index} style={styles.userContainer}>
            <Text style={styles.activeuser}>{use.name}</Text>
            <Text>This Volunteer is available</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.activeassistance}>
              <Text style={styles.activeassistancetxt}>Accept</Text>
            </TouchableOpacity>
          </View>
        ))}
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
    width: 130,
    height: 130,
    marginTop: 20,
  },
  activeuserContainer: {
    position: 'absolute',
    top: 160,
    marginLeft: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    display: 'flex',
  },
  activeuser: {
    fontSize: 17,
    fontWeight: '700',
    alignSelf: 'center',
    textAlign: 'center',
  },
  userContainer: {
    backgroundColor: '#abadd6',
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginBottom: 40,
    borderRadius: 20,
  },
  activeassistance: {
    backgroundColor: '#fff',
    width: 100,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
  },
  activeassistancetxt: {
    textAlign: 'center',
    paddingVertical: 8,
  },
});

export default ActiveVolunteers;
