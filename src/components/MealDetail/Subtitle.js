import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Subtitle = props => {
  const {children} = props;
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 6,
    textAlign: 'center',
  },
  subTitleContainer: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 2,
    margin: 4,
  },
});
