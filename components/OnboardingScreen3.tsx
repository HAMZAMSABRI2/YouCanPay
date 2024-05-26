import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const OnboardingScreen3 = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/onboard3.png')} style={styles.image} />
      <Text style={styles.title}>Receive Money From Anywhere In The World</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('Home')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OnboardingScreen3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 5,
    marginTop: 20,
    width : "90%",
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
    textAlign:"center", 
  }
});
