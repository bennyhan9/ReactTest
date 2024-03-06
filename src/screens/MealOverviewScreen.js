import React, {useLayoutEffect} from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealsList/MealItem';
import MealsList from '../components/MealsList/MealsList';

const MealOverviewScreen = props => {
  const {navigation, route} = props;
  const categoryId = route.params.categoryId;
  const displayMeals = MEALS.filter(
    mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0,
  );

  const mealItemPressHandler = mealId => {
    navigation.navigate('MealDetailsScreen', {mealId: mealId});
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
    <MealsList items={displayMeals} onPress={mealItemPressHandler} />
  );
};

export default MealOverviewScreen;

