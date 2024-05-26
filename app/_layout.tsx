import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const App = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown:false}}/>
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} />
        <Stack.Screen name='Home' options={{headerShown:false}}/>
        <Stack.Screen name='login' options={{ headerShown: false , title:"Login"}}/>
        <Stack.Screen name='signup' options={{ headerShown: false }} />
        <Stack.Screen name='ConfirmOTP' options={{ headerShown: false }} />
        <Stack.Screen name='email' options={{ headerShown: false }} />
        <Stack.Screen name='address' options={{ headerShown: false }} />
    </Stack>
  )
}

export default App