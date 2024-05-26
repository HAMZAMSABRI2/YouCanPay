import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const OnboardingScreen2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/onboard2.png')} style={styles.image} />
      <Text style={styles.title}>Spend money abroad, and track your expense</Text>
    </View>
  )
}

export default OnboardingScreen2

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
});