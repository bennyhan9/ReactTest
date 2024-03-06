import React, {useLayoutEffect, useContext} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetail from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import {FavoritesContext} from '../store/context/favorites-context';
const addFav = require('../assets/icons/add_favorite.png');
const fav = require('../assets/icons/favorite.png');

const MealDetailsScreen = props => {
  const favoriteMealsCtx = useContext(FavoritesContext)
  const {navigation, route} = props;
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  const mealDetails = {
    affordability: selectedMeal.affordability,
    complexity: selectedMeal.complexity,
    duration: selectedMeal.duration,
  };

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId)
    } else {
      favoriteMealsCtx.addFavorite(mealId)
    }
  };

  useLayoutEffect(() => {
    const displayedMealId = MEALS.find(meal => meal.id === mealId).title;
    navigation.setOptions({
      title: displayedMealId,
      headerRight: () => {
        return (
        <IconButton
          imgSrc={mealIsFavorite ? fav : addFav}
          onPress={changeFavoriteStatusHandler}
        />
        );
      },
    });
  }, [mealId, navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.mealDetailcContainer}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail {...mealDetails} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  mealDetailcContainer: {
    flex: 1,
    paddingVertical: 16,
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  listOuterContainer: {
    padding: 16,
    alignItems: 'center',
  },
  listInnerContainer: {
    width: '86%',
  },
});
