import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const PrimaryButton = props => {
  const {title, onPress = {}} = props;
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) => [
          pressed && styles.pressed,
          styles.buttonInnerContainer,
        ]}
        onPress={onPress}
        android_ripple={{color: '#e2e2e2'}}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#9A9A9A',
    paddingVertical: 8,
    paddingHorizontal: 16,

    elevation: 2,
  },
  buttonText: {
    color: '#1A1A1A',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
