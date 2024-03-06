import React from 'react';
import {
  Pressable,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
} from 'react-native';

const CategoryGridTiles = props => {
  const {category, onPress} = props;
  const {title, imagePath} = category;

  const loadImage = path => {
    let img;
    switch (path) {
      case 'italian':
        img = require('../assets/images/italian.jpg');
        break;
      case 'quick':
        img = require('../assets/images/quick.jpg');
        break;
      case 'hamburger':
        img = require('../assets/images/hamburger.jpg');
        break;
      case 'german':
        img = require('../assets/images/german.jpg');
        break;
      case 'light':
        img = require('../assets/images/light.jpg');
        break;
      case 'exotic':
        img = require('../assets/images/exotic.jpg');
        break;
      case 'breakfast':
        img = require('../assets/images/breakfast.jpg');
        break;
      case 'asian':
        img = require('../assets/images/asian.jpg');
        break;
      case 'french':
        img = require('../assets/images/french.jpg');
        break;
      case 'summer':
        img = require('../assets/images/summer.jpg');
        break;
      default:
        img = require('../assets/images/waiting.jpg');
        break;
    }
    return img;
  };

  return (
    <View style={styles.gridItem}>
      <ImageBackground
        source={loadImage(imagePath)}
        resizeMode="cover"
        imageStyle={{opacity: 0.6}}
        style={styles.imageBackground}>
        <Pressable
          android_ripple={{color: '#ccc'}}
          style={({pressed}) => [
            styles.buttonStyles,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={onPress}
          >
          <View style={[styles.overlay, {backgroundColor: 'color'}]} />
          <View style={styles.innerContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default CategoryGridTiles;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonStyles: {
    borderRadius: 8,
    flex: 1,
  },
  overlay: {
    flex: 1,
    borderRadius: 8,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  imageBackground: {
    flex: 1,
    borderRadius: 8,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
