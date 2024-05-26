import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import OnboardingScreen1 from './OnboardingScreen1'
import OnboardingScreen2 from './OnboardingScreen2'
import OnboardingScreen3 from './OnboardingScreen3'

const Onboarding = (navigation:any) => {
  return (

    <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
        <OnboardingScreen1 />
        <OnboardingScreen2 />
        <OnboardingScreen3 />

    </Swiper>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    wrapper: {},
  });
  