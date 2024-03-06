import React from 'react';
import {Button, FlatList} from 'react-native';
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

  const handleNavToFav = () => {
    navigation.navigate('FavoritesScreen');
  };

  return (
    <>
    <Button title='Favorites' onPress={handleNavToFav} />
    <FlatList
      data={CATEGORIES}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
    </>
  );
};

export default CategoriesScreen;
