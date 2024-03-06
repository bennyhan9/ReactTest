import React from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';

const IconButton = props => {
  const {imgSrc, onPress} = props;
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <Image style={styles.image} source={imgSrc} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {},
  pressed: {
    opacity: 0.7,
  },
  image: {
    height: 24,
    width: 24,
  },
});
