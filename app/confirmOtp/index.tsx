import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const ConfirmOTP = () => {
  const { phone } = useLocalSearchParams();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);
  const router = useRouter();

  const handleChangeText = (text:any, index:any) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleConfirmPress = () => {
    const otpCode = otp.join('');
    if (otpCode === '123456') {
      router.push('email'); 
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm your phone</Text>
      <Text style={styles.subtitle}>We sent a 6 digit code to {phone}</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleConfirmPress}>
        <Text style={styles.buttonText}>Verify Your Number</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Resend code pressed')}>
        <Text style={styles.resendText}>Didn't get a code? Resend</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    height: 40,
    width: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#d3d3d3',
    padding: 15,
    borderRadius: 34,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resendText: {
    color: '#007bff',
    fontSize: 16,
    marginTop: 20,
  },
});

export default ConfirmOTP;
