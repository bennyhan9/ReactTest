import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTiles from '../components/CategoryGridTiles';

const CategoriesScreen = props => {
  const {navigation} = props;

  const renderCategoryItem = itemData => {
    const itemPressHandler = () => {
      navigation.navigate('MealsOverview', {categoryId: itemData.item.id});
    };
    return (
      <CategoryGridTiles category={itemData.item} onPress={itemPressHandler} />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
