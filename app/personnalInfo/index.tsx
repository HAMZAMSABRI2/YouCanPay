import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

interface PersonalInfoScreenProps {
  onContinue: () => void;
}

const PersonalInfoScreen: React.FC<PersonalInfoScreenProps> = ({ onContinue }) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add your personal info</Text>
      <Text style={styles.subtitle}>
        This info needs to be accurate with your ID document.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="MM/DD/YYYY"
        value={dob}
        onChangeText={setDob}
        
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: (fullName && username && dob) ? '#ccc' : '#e0e0e0' }]}
        onPress={onContinue}
        disabled={!(fullName && username && dob)}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
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
});

export default PersonalInfoScreen;
