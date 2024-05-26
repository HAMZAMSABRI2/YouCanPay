import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/register.png')} style={styles.image} />
      <Text style={styles.title}>Create your Coinpay account</Text>
      <Text style={styles.description}>
        Coinpay is a powerful tool that allows you to easily send, receive, and track all your transactions.
      </Text>
      <TouchableOpacity style={styles.button}  onPress={() => router.push('/signup')}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={() => router.push('/login')}>
        <Text style={[styles.buttonText, styles.loginButtonText]}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        By continuing you accept our{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('http://example.com/terms')}>
          Terms of Service
        </Text>{' '}
        and{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('http://example.com/privacy')}>
          Privacy Policy
        </Text>
        .
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 400,
    height: 390,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0000ff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#0000ff',
  },
  loginButtonText: {
    color: '#0000ff',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    color: '#0000ff',
    textDecorationLine: 'underline',
  },
});

export default Home;
