import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const StyleData = require('../data/style_data.json');
// import Colors from '../constants/color';


const Gradient: React.FC = ({children}) => {
  useEffect(() => {
  }, []);
  
  return (
    <>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={[StyleData.gradientUpperColor, StyleData.gradientLowerColor]}
        style={styles.container}>
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Gradient;