import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const List = props => {
  const {data} = props;
  return data.map(dataItem => (
    <View key={dataItem} style={styles.listItem}>
      <Text key={dataItem} style={styles.itemText}>
        {dataItem}
      </Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#d2d2d2',
  },
  itemText: {
    textAlign: 'center',
  },
});
