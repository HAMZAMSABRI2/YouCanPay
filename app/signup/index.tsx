import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useRouter } from 'expo-router';

const SignUp = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleSignUpPress = () => {
    if (phone && password) {
      setModalVisible(true);
    } else {
      alert('Please enter both phone number and password');
    }
  };

  const handleYesPress = () => {
    setModalVisible(false);
    router.push({ pathname: 'confirmOtp', params: { phone } });  
  };

  const handleNoPress = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.subtitle}>Enter your mobile number to verify your account</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Phone</Text>
        <View style={styles.phoneInput}>
          <Text style={styles.countryCode}>+212</Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Verify your phone number before we send code</Text>
          <Text style={styles.modalSubtitle}>Is this correct? +212 {phone}</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.modalButton} onPress={handleYesPress}>
              <Text style={styles.modalButtonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={handleNoPress}>
              <Text style={styles.modalButtonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  countryCode: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 13,
  },
  button: {
    backgroundColor: '#d3d3d3',
    padding: 15,
    borderRadius: 34,
    alignItems: 'center',
    marginBottom: 120,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SignUp;
