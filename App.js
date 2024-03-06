/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import {StatusBar, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './src/screens/CategoriesScreen';
import MealOverviewScreen from './src/screens/MealOverviewScreen';
import MealDetailsScreen from './src/screens/MealDetailsScreen';
//import FavoritesContextProvider from './src/store/context/favorites-context';
import FavoritesScreen from './src/screens/FavoritesScreen';
import {store} from './src/store/redux/store';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      {/*<FavoritesContextProvider>*/}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              title: 'Meal Categories',
              headerStyle: {backgroundColor: '#e5e5e5'},
            }}>
            <Stack.Screen
              name="MealsCategories"
              component={CategoriesScreen}
              options={{
                title: 'Meal Categories',
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealOverviewScreen}
              options={{
                title: 'Meal Overview',
              }}
            />
            <Stack.Screen
              name="MealDetailsScreen"
              component={MealDetailsScreen}
              options={{
                title: 'Meal Detail',
              }}
            />
            <Stack.Screen
              name="FavoritesScreen"
              component={FavoritesScreen}
              options={{
                title: 'Favorites',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      {/*</FavoritesContextProvider>*/}
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
