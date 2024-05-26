import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

interface EmailScreenProps {
  onContinue: () => void
}

const EmailScreen: React.FC<EmailScreenProps> = ({ onContinue }) => {
  const [email, setEmail] = useState('')
  const handleContinue = () => {
    if (email) {
      router.push('address')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add your email</Text>
      <Text style={styles.subtitle}>
        This info needs to be accurate with your ID document.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="name@example.com"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: email ? '#ccc' : '#e0e0e0' }]}
        onPress={handleContinue}
        disabled={!email}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',

    alignContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})

export default EmailScreen
