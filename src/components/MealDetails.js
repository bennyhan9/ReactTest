import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MealDetail = props => {
  const {affordability, complexity, duration, style, textStyle} = props;
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{affordability}</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity}</Text>
      <Text style={[styles.detailItem, textStyle]}>{`${duration}m`}</Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 14,
  },
});
