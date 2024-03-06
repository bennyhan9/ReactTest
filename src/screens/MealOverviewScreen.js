import React, {useLayoutEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealOverviewScreen = props => {
  const {navigation, route} = props;
  const categoryId = route.params.categoryId;
  const displayMeals = MEALS.filter(
    mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0,
  );

  const mealItemPressHandler = mealId => {
    navigation.navigate('MealDetailsScreen', {mealId: mealId});
  };

  const renderMealItem = itemData => {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} onPress={mealItemPressHandler} />;
  };

  useLayoutEffect(() => {
    const displayedCategoryId = CATEGORIES.find(
      category => category.id === categoryId,
    ).title;
    navigation.setOptions({
      title: displayedCategoryId,
    });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
