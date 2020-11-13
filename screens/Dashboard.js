import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Boxes from '../src/Boxes';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Boxes />
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});