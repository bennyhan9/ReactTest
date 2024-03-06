/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StatusBar, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './src/screens/CategoriesScreen';
import MealOverviewScreen from './src/screens/MealOverviewScreen';
import MealDetailsScreen from './src/screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
