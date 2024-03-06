import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = props => {
    const {navigation} = props;
    const mealItemPressHandler = mealId => {
        navigation.navigate('MealDetailsScreen', {mealId: mealId});
    };

    const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals = favoriteMealsCtx ? MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id)) : null;
    
    if (favoriteMeals.length == 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        )
    }
    
    return <MealsList items={favoriteMeals} onPress={mealItemPressHandler} />
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });