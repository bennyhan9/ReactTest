import React from "react";
import { useSelector } from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import MealsList from "../components/MealsList/MealsList";
//import { useContext } from "react";
//import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = props => {
    const {navigation} = props;
    const favoriteMealIds = useSelector(state => state.FavoritesReducer.favoriteMealIds)
    const mealItemPressHandler = mealId => {
        navigation.navigate('MealDetailsScreen', {mealId: mealId});
    };

    //const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));
    
    
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