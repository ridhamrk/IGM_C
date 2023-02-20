import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import HomeHeader from '../../components/HomeHeader';
import Stories from '../../components/Stories';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />

      <Stories />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',

    flex: 1,
  },
});

export default HomeScreen;
