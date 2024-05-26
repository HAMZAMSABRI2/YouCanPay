import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const index = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>
      <Button title="Start Onboarding" onPress={() => router.push('Onboarding')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default index

