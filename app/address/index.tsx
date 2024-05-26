import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const AddressScreen: React.FC = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    if (address && city && postcode) {
      router.push('personnalInfo'); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home address</Text>
      <Text style={styles.subtitle}>This info needs to be accurate with your ID document.</Text>
      <TextInput
        style={styles.input}
        placeholder="Address Line"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="City, State"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Postcode"
        value={postcode}
        onChangeText={setPostcode}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: (address && city && postcode) ? '#ccc' : '#e0e0e0' }]}
        onPress={handleContinue}
        disabled={!(address && city && postcode)}
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

export default AddressScreen;
